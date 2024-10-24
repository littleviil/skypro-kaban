import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routesPages } from "../../lib/routes";
import * as S from "./RegisterPage.styled";

function RegisterPage({ setIsAuth }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleRegister(event) {
    event.preventDefault();
    setIsAuth(true);
    navigate(routesPages.MAIN);
  }

  return (
    <S.RegisterWrapper>
      <S.ContainerSignup>
        <S.ModalReg>
          <S.ModalBlockReg>
            <S.ModalTitleReg>
              <h2>Регистрация</h2>
            </S.ModalTitleReg>
            <S.ModalFormLoginReg onSubmit={handleRegister}>
              <S.ModalInputReg
                type="text"
                name="firstName"
                id="first-name"
                placeholder="Имя"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <S.ModalInputReg
                type="email"
                name="email"
                id="loginReg"
                placeholder="Эл. почта"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <S.ModalInputReg
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <S.ModalBtnSignupEnt type="submit">
                Зарегистрироваться
              </S.ModalBtnSignupEnt>
              <S.ModarFormGroupReg>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={routesPages.SIGNIN}>Войдите здесь</Link>
                </p>
              </S.ModarFormGroupReg>
            </S.ModalFormLoginReg>
          </S.ModalBlockReg>
        </S.ModalReg>
      </S.ContainerSignup>
    </S.RegisterWrapper>
  );
};

export default RegisterPage;