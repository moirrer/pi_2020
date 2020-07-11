import React from "react";
import { useForm } from "react-hook-form";

import "./ChangePassword.css";

export default () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("Dados enviados: ", data);
    alert("Senha alterada!");
  }

  return (
    <div className="ChangePass">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="password"
          id="inputPass"
          name="password"
          placeholder="Senha"
          ref={register({ required: "Informe sua senha" })}
        />
        {errors.password && <p className="Error">{errors.password.message}</p>}

        <input
          type="password"
          id="inputConfirm"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          ref={register({ required: "A senha precisa ser igual" })}
        />
        {errors.confirmPassword && (
          <p className="Error">{errors.confirmPassword.message}</p>
        )}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};