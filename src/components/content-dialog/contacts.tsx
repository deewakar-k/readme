"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createContact } from "@/actions/contacts";
import { useContacts } from "@/hooks/use-contacts";

import { Add } from "../add-more";
import Content from "../content";
import { Empty } from "../empty";
import { Error } from "../error";
import { GoBack } from "../go-back";
import { InputBox } from "../input-box";
import { Loader } from "../loader";
import { Button } from "../ui/button";

interface ContactFormInput {
  platform: string;
  username: string;
  url: string;
}

export const ContactsContent = () => {
  const { data: contacts = [], error, isLoading, mutate } = useContacts();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm<ContactFormInput>();
  const [addMore, setAddMore] = useState(false);

  const onSubmit = async (data: ContactFormInput) => {
    try {
      const newContact = await createContact(data);
      if (newContact) {
        mutate(
          async (currentContacts) => {
            return [...(currentContacts || []), newContact];
          },
          { revalidate: false }
        );
      }
      setAddMore(false);
    } catch (error) {
      console.error("failed to create new contact: ", error);
      toast.error("failed to create contact");
    }
  };

  if (isLoading) return <Loader />;

  if (error) {
    console.error(error);
    return <Error label="contacts" />;
  }

  return (
    <div className="flex flex-col gap-3">
      {addMore ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <InputBox
              label="platform"
              placeholder="github"
              {...register("platform")}
            />
            <InputBox
              label="username"
              placeholder="deewakar-k"
              {...register("username")}
            />
          </div>
          <InputBox
            label="url"
            placeholder="github.com/deewakar-k"
            {...register("url")}
          />

          <div className="fixed right-8 bottom-2 flex items-center gap-3">
            <GoBack handleOnClick={() => setAddMore(false)} />

            <Button type="submit" disabled={isSubmitting || !isDirty}>
              {isSubmitting ? <Loader /> : ""}
              Save
            </Button>
          </div>
        </form>
      ) : (
        <>
          {contacts.length === 0 ? (
            <Empty label="contacts" />
          ) : (
            <>
              {contacts.map((contact, idx) => (
                <Content
                  header={contact.platform}
                  title={contact.username}
                  url={contact.url}
                  key={idx}
                  showAction={true}
                  className="py-0"
                />
              ))}
            </>
          )}
        </>
      )}
      <div className="fixed right-4 bottom-4 flex items-center gap-2">
        {addMore ? "" : <Add handleOnClick={() => setAddMore(true)} />}
      </div>
    </div>
  );
};
