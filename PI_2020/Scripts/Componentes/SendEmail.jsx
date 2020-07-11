import React from "react";
import { useForm } from "react-hook-form";

import "./SendEmail.css";

export default () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("Dados enviados: ", data);
    alert("Email enviado!");
  }

  return (
    <div className="SendEmail">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="email"
          id="inputEmail"
          name="email"
          placeholder="Endereço de Email"
          ref={register({
            required: "Informe seu E-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Adicione um E-mail válido!",
            },
          })}
        />
        {errors.email && <p className="Error">{errors.email.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
