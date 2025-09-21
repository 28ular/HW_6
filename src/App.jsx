import { useForm } from "react-hook-form";
import './App.css'

function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Форма отправлена:", data);
    };

    const password = watch("password");

    return (

        <>
            <div className="wrapper">


            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column" , gap:15}}>
                <input
                    {...register("name", { required: "Введите имя" })}
                    placeholder="Имя"
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

                <input
                    {...register("email", {
                        required: "Введите email",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Некорректный email",
                        },
                    })}
                    placeholder="Email"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

                <input
                    type="password"
                    {...register("password", {
                        required: "Введите пароль",
                        minLength: { value: 6, message: "Минимум 6 символов" },
                    })}
                    placeholder="Пароль"
                />
                {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                )}

                <input
                    type="password"
                    {...register("confirmPassword", {
                        required: "Повторите пароль",
                        validate: (value) =>
                            value === password || "Пароли не совпадают",
                    })}
                    placeholder="Подтверждение пароля"
                />
                {errors.confirmPassword && (
                    <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
                )}

                <button type="submit">Зарегистрироваться</button>
            </form>
            </div>
        </>

    );
}

export default App;
