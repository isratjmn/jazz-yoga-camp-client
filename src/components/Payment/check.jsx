	//   1.  get clientSecret from backend
	useEffect(() => {
		if (classDetails?.price > 0) {
			secureAxios
				.post("/create-payment-intent", { price: classDetails?.price })
				.then((res) => {
					// console.log(res.data.clientSecret);
					setClientSecret(res.data.clientSecret);
				});
		}
	}, [classDetails, secureAxios]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});
		if (error) {
			console.log("[error]", error);
			setCardError(error.message);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
		}
		// Confirm Payment
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || "anonymous",
						email: user?.email || "unknown",
					},
				},
			});
		if (confirmError) {
			console.log(confirmError);
			setCardError(confirmError.message);
		}
		console.log("payment intent", paymentIntent);

		if (paymentIntent && paymentIntent.status === "succeeded") {
			const res = await secureAxios.post("save-payment-info", {
				_id,
				classId,
				email: user.email,
				paymentAmount: price,
				transactionId: paymentIntent.id,
			});
			if (res.data?.result.insertedId) {
				Swal.fire({
					icon: "success",
					title: "Success!",
					text: "Payment successful",
					timer: 2000,
					showConfirmButton: false,
				});
			}
			navigate("/dashboard/my-enrolled-classes");
		} 
		else throw new Error("Something wrong!");
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}

		/* if (paymentIntent.status === "succeeded") {
			// Save payment information to the server
			const paymentInfo = {
				...classDetails,
				email: user.email,
				transactionId: paymentIntent.id,
				date: new Date(),
			};
			secureAxios.post("/save-payment-info", paymentInfo).then((res) => {
				console.log(res.data);
				if (res.data.insertedId) {
					updateStatus(classDetails.classId, true)
						.then((data) => {
							setProcessing(false);
							console.log(data);
							const text = `Payment successful!, TransactionId: ${paymentIntent.id}`;
							toast.success(text);
							navigate("/dashboard/my-enrolled-classes");
					
						})
						.catch((err) => console.log(err));
				}
			});
		} */