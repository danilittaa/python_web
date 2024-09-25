import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/lib/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/form";
import { Input } from "@/lib/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "@/axiosConfig";
import { Switch } from "@/lib/switch";

interface IProps {
  children: React.ReactNode;
}
const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Пошта має бути довша 2 символів.",
    })
    .email({
      message: "Неправильний формат пошти.",
    }),
  username: z.string().min(2, {
    message: "Імя має бути довшим 1 символа.",
  }),
  password: z.string().min(2, {
    message: "Пароль має бути довшим 2 символів.",
  }),
  isCoach: z.boolean().default(true),
});

const SignUpPopup: React.FC<IProps> = ({ children }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      isCoach: false,
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    try {
      const res = await axios.post("register/", {
        role: values.isCoach ? "coach" : "athlete",
        ...values,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle>Створіть аккаунт</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Емейл</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Імя</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isCoach"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <FormLabel>Тренер?</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="bg-blue-400 text-white px-4 py-2 rounded-xl mt-2"
            >
              Зареєструватись
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpPopup;
