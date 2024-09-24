import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/lib/dialog";
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
import axios from "@/axiosConfig";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "@/lib/command";
import { Button } from "@/lib/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/lib/popover";
import { getUser } from "@/services/getUser";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface IProps {
  currentDate: Value;
  onSuccess: () => void;
  isOpen: boolean;
  onClose: () => void;
}
const formSchema = z.object({
  measurementType: z.string(),
  value: z.string(),
});

const AddMedicalData: React.FC<IProps> = ({
  currentDate,
  onSuccess,
  isOpen,
  onClose,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      measurementType: "",
      value: "",
    },
  });
  const measurementTypes = [
    { value: "heart_rate", label: "Частота серцебиття" },
    { value: "hours_slept", label: "Години сну" },
    { value: "water_intake", label: "Літрів води випито" },
    { value: "calories", label: "Витрачено калорій" },
    { value: "weight", label: "Вага" },
    { value: "temperature", label: "Температура" },
  ];

  const onSubmit = async (values: any) => {
    try {
      await axios.post("medical-data/", {
        measurement_type: values.measurementType,
        value: values.value,
        measurement_date: currentDate,
        user: getUser().id,
      });
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle>Додайте медичний показник</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="measurementType"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Показник</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={
                            `w-[200px] justify-between` + !field.value &&
                            " text-muted-foreground"
                          }
                        >
                          {field.value
                            ? measurementTypes.find(
                                (type) => type.value === field.value
                              )?.label
                            : "Виберіть показник"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandList>
                          <CommandGroup>
                            {measurementTypes.map((type) => (
                              <CommandItem
                                value={type.label}
                                key={type.value}
                                onSelect={() => {
                                  form.setValue("measurementType", type.value);
                                }}
                              >
                                <Check
                                  className={
                                    "mr-2 h-4 w-4" + type.value === field.value
                                      ? " opacity-100"
                                      : " opacity-0"
                                  }
                                />
                                {type.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Значення</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="bg-blue-400 text-white px-4 py-2 rounded-xl mt-2"
            >
              Додати
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMedicalData;
