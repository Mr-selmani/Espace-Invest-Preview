"use client";
import React from "react";
import DashboardLayout from "@/components/layout/dashboardPage";
import { FormStepsContainer, FormStepsWrapper } from "@/components/FormSteps";
import FormStep from "@/components/Step";
import FormNavigation from "@/components/formNavigation";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const AddProject = () => {
  const form = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <DashboardLayout title="Mes projets">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-10 w-full"
        >
          <FormStepsContainer
            collapseFirst={false}
            title="Ajout du nouveau projet"
            description="Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed."
          >
            <FormStepsWrapper>
              <FormStep stepOrder={1}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-normal text-left">
                    Information du projet
                  </h3>
                  <p className="text-sm text-left text-[#A8A7BB]">
                    Please fill your information so we can get in touch with
                    you.
                  </p>
                  <div className="w-full mt-5 grid grid-cols-2 gap-7 mobile:grid-cols-1">
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="statu-de-client"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#170F49]">
                              Statut du client
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full h-14 shadow-input border border-[#EFF0F6]">
                                  <SelectValue placeholder="Lead" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Leads</SelectLabel>
                                  <SelectItem value="option-1">
                                    Option 1
                                  </SelectItem>
                                  <SelectItem value="option-2">
                                    Option 2
                                  </SelectItem>
                                  <SelectItem value="option-3">
                                    Option 3
                                  </SelectItem>
                                  <SelectItem value="option-4">
                                    Option 4
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="delai-professionnel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#170F49]">
                              Délai pressionnel
                            </FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full h-14 pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                />
                                </PopoverContent>
                            </Popover>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="avancement-du-project"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#170F49]">
                              Avancement du projet
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full h-14 shadow-input border border-[#EFF0F6]">
                                  <SelectValue placeholder="Contrat en réflexion" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Contrats</SelectLabel>
                                  <SelectItem value="option-1">
                                    Option 1
                                  </SelectItem>
                                  <SelectItem value="option-2">
                                    Option 2
                                  </SelectItem>
                                  <SelectItem value="option-3">
                                    Option 3
                                  </SelectItem>
                                  <SelectItem value="option-4">
                                    Option 4
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="montant-estimatif-vente"
                        defaultValue=""
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#170F49]">
                              Montant estimatif de la vente
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input type="number" placeholder="18.000" className="h-14" {...field}  />
                                    <img src="/assets/icons/euro.svg" height={32} width={32} className="absolute top-1/2 -translate-y-1/2 right-4 w-6 object-contain" />
                                </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="montant-estimatif-placements"
                        defaultValue=""
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#170F49]">
                              Montant estimatif des placements
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input type="number" placeholder="18.000" className="h-14" {...field}  />
                                    <img src="/assets/icons/euro.svg" height={32} width={32} className="absolute top-1/2 -translate-y-1/2 right-4 w-6 object-contain" />
                                </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="prediction-project"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#170F49]">
                              Votre prédiction sur ce projet
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full h-14 shadow-input border border-[#EFF0F6]">
                                  <SelectValue placeholder="Acquis" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="option-1">
                                    Option 1
                                  </SelectItem>
                                  <SelectItem value="option-2">
                                    Option 2
                                  </SelectItem>
                                  <SelectItem value="option-3">
                                    Option 3
                                  </SelectItem>
                                  <SelectItem value="option-4">
                                    Option 4
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </FormStep>
              <FormStep stepOrder={2}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-normal text-left">
                    1.Prise de Contact
                  </h3>
                  <p className="text-sm text-left text-[#A8A7BB]">
                    Initiation et Introduction
                  </p>
                  <div className="w-full mt-5 grid grid-cols-1 gap-7 mobile:grid-cols-1">
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="prise-de-contact"
                        defaultValue=""
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                                <Textarea placeholder="Détails sur le premier contact avec le client, incluant les questions clés et les premières impressions." className="min-h-60" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </FormStep>
              <FormStep stepOrder={3}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-normal text-left">
                    2.Découverte Client
                  </h3>
                  <p className="text-sm text-left text-[#A8A7BB]">
                    Comprendre le Client
                  </p>
                  <div className="w-full mt-5 grid grid-cols-1 gap-7 mobile:grid-cols-1">
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="decouverte-client"
                        defaultValue=""
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                                <Textarea placeholder="Recueillir des informations sur les besoins, les attentes et le contexte du client." className="min-h-60" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </FormStep>
              <FormStep stepOrder={4}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-normal text-left">
                    3. Définitions du Profil et des Objectifs
                  </h3>
                  <p className="text-sm text-left text-[#A8A7BB]">
                    Définition du Profil et des Objectifs
                  </p>
                  <div className="w-full mt-5 grid grid-cols-1 gap-7 mobile:grid-cols-1">
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="definition-proifl-objectifs"
                        defaultValue=""
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                                <Textarea placeholder="Définir le profil du client et préciser clairement ses objectifs." className="min-h-60" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </FormStep>
              <FormStep stepOrder={5}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-normal text-left">
                    4. Définir les Stratégies
                  </h3>
                  <p className="text-sm text-left text-[#A8A7BB]">
                    Planification Stratégique
                  </p>
                  <div className="w-full mt-5 grid grid-cols-1 gap-7 mobile:grid-cols-1">
                    <div className="flex flex-col gap-2 relative">
                      <FormField
                        control={form.control}
                        name="definir-strategies"
                        defaultValue=""
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                                <Textarea placeholder="Planifier et détailler les stratégies pour atteindre les objectifs du client." className="min-h-60" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </FormStep>
            </FormStepsWrapper>
            {/* nav here */}
            <FormNavigation 
                nextText="Suivant" 
                prevText="Précédent" 
                submitText="Ajouter le projet"
            />
          </FormStepsContainer>
        </form>
      </Form>
    </DashboardLayout>
  );
};

export default AddProject;
