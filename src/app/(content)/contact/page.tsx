"use client";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Input } from "./components/input";
import { TextArea } from "./components/textarea";
import useErrors from "@/app/hooks/useErrors";
import isEmailValid from "@/utils/isEmailValid";
import { send } from "./actions";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [subject, setSubject] = useState("");
	const nameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const subjectInputRef = useRef<HTMLInputElement>(null);
	const messageInputRef = useRef<HTMLTextAreaElement>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [loadingMessage, setLoadingMessage] = useState("");
	const [step, setStep] = useState(0);

	const { setError, removeError, getErrorMessageByFieldName, errors } =
		useErrors();

	useEffect(() => {
		if (step === 1) {
			emailInputRef.current?.focus();
		} else if (step === 2) {
			subjectInputRef.current?.focus();
		} else if (step === 3) {
			messageInputRef.current?.focus();
		} else {
			nameInputRef.current?.focus();
		}
	}, [step]);

	function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
		setName(e.target.value);
		if (!e.target.value.trim()) {
			setError({ field: "name", message: "Name is required" });
		} else {
			removeError("name");
		}
	}

	function handleOnChangeEmail(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
		if (!e.target.value.trim() || !isEmailValid(e.currentTarget.value || "")) {
			setError({ field: "email", message: "Invalid e-mail" });
		} else {
			removeError("email");
		}
	}

	function handleOnChangeSubject(e: ChangeEvent<HTMLInputElement>) {
		setSubject(e.target.value);
		if (!e.target.value.trim()) {
			setError({ field: "subject", message: "Subject is required" });
		} else {
			removeError("subject");
		}
	}

	function handleOnChangeMessage(e: ChangeEvent<HTMLTextAreaElement>) {
		setMessage(e.target.value);
		if (!e.target.value.trim()) {
			setError({ field: "message", message: "Message is required" });
		} else {
			removeError("message");
		}
	}

	function handleSetStep(nextStep: number) {
		return (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			if (e.key === "Enter") {
				if (!errors.length) {
					setStep(nextStep);

					if (nextStep === 0) {
						handleOnSubmit();
					}
				}
			}
		};
	}

	async function handleOnSubmit() {
		try {
			setIsLoading(true);
			setLoadingMessage("Sending e-mail...");
			await send({
				name,
				email,
				subject,
				message,
			});
			setLoadingMessage("Done!");
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve("ok");
				}, 1000),
			);
		} catch (err) {
			console.error(err);
		} finally {
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
			setIsLoading(false);
		}
	}

	return (
		<>
			<span className="text-green block">Contact me</span>
			<span className="mb-6 text-xs block">Press enter to confirm!</span>

			<div className="space-y-4">
				{isLoading ? (
					<span className="text-green">{loadingMessage}</span>
				) : (
					step === 0 && (
						<Input
							id="name"
							label="Your name:"
							value={name}
							ref={nameInputRef}
							onChange={handleOnChangeName}
							onKeyDown={handleSetStep(1)}
							error={getErrorMessageByFieldName("name")}
							maxLength={50}
							className="w-full"
						/>
					)
				)}
				{step === 1 && (
					<Input
						id="email"
						label="Your e-mail:"
						value={email}
						ref={emailInputRef}
						onChange={handleOnChangeEmail}
						onKeyDown={handleSetStep(2)}
						error={getErrorMessageByFieldName("email")}
						className="w-full"
					/>
				)}
				{step === 2 && (
					<Input
						id="subject"
						label="Subject:"
						value={subject}
						ref={subjectInputRef}
						onChange={handleOnChangeSubject}
						onKeyDown={handleSetStep(3)}
						error={getErrorMessageByFieldName("subject")}
						className="w-full"
					/>
				)}
				{step === 3 && (
					<TextArea
						id="message"
						label="Message:"
						value={message}
						ref={messageInputRef}
						onChange={handleOnChangeMessage}
						onKeyDown={handleSetStep(0)}
						maxLength={385}
						error={getErrorMessageByFieldName("message")}
						className="w-full overflow-hidden"
					/>
				)}
			</div>
		</>
	);
}
