import { useForm } from "react-hook-form";

const CreateAccount = () => {
  const { resgister, handleSubmit } = useForm();
  return (
    <div>
      <input {...resgister("accountName")} />
    </div>
  );
};

export default CreateAccount;
