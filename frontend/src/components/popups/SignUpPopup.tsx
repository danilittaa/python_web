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
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  name: z.string().min(2, {
    message: "Імя має бути довшим 2 символів.",
  }),
  password: z.string().min(2, {
    message: "Пароль має бути довшим 2 символів.",
  }),
});

const SignUpPopup: React.FC<IProps> = ({ children }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    navigate("/home");
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
              name="name"
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
