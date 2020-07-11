import React from "react";
import { useForm } from "react-hook-form";

import ForgotPassword from "./ForgotPassword";
import "./Login.css";

export default () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("Dados enviados: ", data);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="email"
          id="inputEmail"
          name="email"
          placeholder="E-mail"
          ref={register({
            required: "Digite seu E-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Adicione um E-mail válido!",
            },
          })}
        />
        {errors.email && <p className="Error">{errors.email.message}</p>}

        <input
          type="password"
          id="inputPassword"
          name="password"
          placeholder="Senha"
          ref={register({ required: "Digite sua senha" })}
        />
        {errors.password && <p className="Error">{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>

      <ForgotPassword />
    </div>
  );
};