"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254) 0768405456",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kuolbuom111@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kakuma, Turkhana 30501, ",
  },
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Simple validation
    if (!form.firstname.value || !form.lastname.value || !form.email.value || !form.phone.value || !form.message.value || !selectedService) {
      toast.error("Please fill out all fields.");
      return;
    }

    const formData = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
      service: selectedService,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted successfully!");
        form.reset(); // Reset the form on success
        setSelectedService(""); // Reset the service selection
      } else {
        toast.error("Failed to submit the form. Please try again.");
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error submitting form:", error);
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-[30px]">
            {/* form */}
            <div className="md:w-[54%] order-2 md:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
                <p className="text-white/60">
                  Let&apos;s work together to create exceptional digital experiences.
                  Whether you need a skilled developer for your next project or
                  a creative collaborator, I&apos;m ready to help turn your vision
                  into reality.
                </p>

                {/* Input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="firstname" placeholder="Firstname" />
                  <Input type="text" name="lastname" placeholder="Lastname" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <Input type="text" name="phone" placeholder="Phone number" />
                </div>

                {/* Select */}
                <Select onValueChange={(value) => setSelectedService(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* Textarea */}
                <Textarea
                  name="message"
                  className="h-[200px]"
                  placeholder="Type your message here."
                />

                {/* Button */}
                <Button
                  type="submit"
                  size="sm"
                  className="max-w-28 bg-accent rounded-full text-black hover:bg-accent"
                >
                  Send message
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center md:justify-end md:order-none order-1 mb-8 md:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white/60">{item.title}</div>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
