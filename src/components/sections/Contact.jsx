import Card from "../ui/Cards";
import InputForm from "../ui/inputForm";
import Button from "../ui/Button";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    name: z.string().min(1, "Nombre es requerido"),
    email: z.string().email("Email inválido"),
    subject: z.string().optional(),
    message: z.string().min(1, "Mensaje es requerido"),
})

const Contact = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({resolver:zodResolver(schema)
        
    });

    const onSubmit = async (data) => {
        try {
        const FormDataToSend = {
            accesskey:import.meta.env.WEB_FORM_API,
            name: data.name,
            email: data.email,
            subject: data.subject || "Nuevo mensaje desde el portafolio",
            message: data.message,
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(FormDataToSend)
        })

        const result = await response.json();
        
        if(result.success){
            alert("Mensaje enviado correctamente");
        }else{
            alert("Error al enviar el mensaje");
        }
        
    } catch (error) {
        console.log("Error", error);
    }
};

    const inputs = [
        {
            id: 1,
            name: "name",
            placeholder: "Tu nombre",
            label: "Nombre",
            type: "text"
        },
        {
            id: 2,
            name: "email",
            placeholder: "Tucorreo@dominio.com",
            label: "Email",
            type: "email"
        },
        {
            id: 3,
            name: "subject",
            placeholder: "Colaboración, proyecto, trabajo",
            label: "Asunto (opcional)",
            type: "text"
        },
        {
            id: 4,
            name:"message",
            placeholder: "Cuéntame sobre tu proyecto...",
            label: "Mensaje",
            type: "textarea"
        }
    ]
    return (
        <section className="py-20 border-t border-primary-tx/50">
            <Card classname = "lg:p-12">
                <div>
                    <h2 className="py-5 text-3xl lg:text-5xl font-bold text-primary-tx text-start leading-13">¿Tienes algo <br /> <span className="text-secundary-tx"> interesante <br /> </span> en mente?</h2>
                    <p className="text-primary-tx/50 font-secundary text-md">Actualmente abierto a colaboraciones freelance y roles remotos. <br /> Cuéntame sobre tu proyecto — respondo en menos de 24 h.</p>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)} className="py-5 grid grid-cols-1 w-full md:grid-cols-2 gap-2.5">
                    {inputs.map((input) => {
                    
                    return(
                        <InputForm 
                        key={input.id} 
                        {...input} 
                        register={register} 
                        errors={errors[input.name]} />
                    )
                    })}
                    <Button icon={<Send/>} text={"Enviar Mensaje"} />
                </form>
        </Card>
        </section>       
    );
}; 


export default Contact;     