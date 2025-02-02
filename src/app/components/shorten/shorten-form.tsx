'use client'

import Link from "next/link";
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { ShortenFormData } from "@/interfaces";
import { ArrowTopRightOnSquareIcon, ChartPieIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { ShortenService } from "@/services/shortenService";
import { API_URL } from "@/config/constants";

export const ShortenForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { url: '' } });
    const [data, setData] = useState('')
    const [url, setUrl] = useState('')
    const [copied, setCopied] = useState(false);

    const { mutate } = useMutation({
        mutationFn: ShortenService.createLink,
        onError: (error) => console.log(error),
        onSuccess: (data) => {
            setData(data);
        }
    });

    const handleForm = (formData: ShortenFormData) => {
        mutate(formData);
        setUrl(formData.url);
    }

    const copyToClipboard = async (value: string) => {
        const url = `${API_URL}/${value}`;
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Mensaje temporal
        } catch (error) {
            console.error(`Error al copiar: ${error}`);

        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(handleForm)}
                noValidate
                className="mt-5 flex justify-center items-center gap-2"
            >
                <input
                    className="border rounded-md px-6 py-2 shadow-sm w-96"
                    type="text"
                    placeholder="Paste link to cut"
                    {
                    ...register('url', {
                        required: 'URL required'
                    })
                    }
                />
                {errors.url && (
                    <div className="my-4 text-red-500 ">
                        {errors.url.message}
                    </div>
                )}
                <button
                    className="bg-orange-500 px-6 py-2 text-white uppercase font-bold rounded-md hover:bg-orange-600"
                >
                    Cut
                </button>
            </form>

            {/* URL Response */}
            {
                (data != '') && (
                    <div className="flex justify-center mt-10">
                        <div className="flex justify-between items-center bg-white gap-6 rounded-md shadow-sm p-5">
                            <div className="flex flex-col items-start gap-1">
                                <p className="text-xl font-bold">{API_URL}/{data}</p>
                                <p className="text-sm text-slate-600">{url}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    className="text-slate-600 hover:text-orange-600"
                                    onClick={() => copyToClipboard(data)}
                                >
                                    <ClipboardDocumentIcon className="size-8" />
                                    {copied && (
                                        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1">
                                            Copiado!
                                        </span>
                                    )}
                                </button>
                                <Link
                                    href={`${API_URL}/${data}/stats`}
                                    className="text-slate-600 hover:text-orange-600"
                                >
                                    <ChartPieIcon className="size-8" />
                                </Link>
                                <Link
                                    href={`${API_URL}/${data}`}
                                    className="text-slate-600 hover:text-orange-600"
                                >
                                    <ArrowTopRightOnSquareIcon className="size-8" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}
