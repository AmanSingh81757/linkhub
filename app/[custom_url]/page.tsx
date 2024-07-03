"use client"
import { createClient } from "@/utils/supabase/client"
import { get } from "http";
import { redirect } from "next/dist/server/api-utils";
import { permanentRedirect } from "next/navigation";
import { NextResponse } from "next/server";

import { useState, useEffect } from "react";

export default function Page({ params }: { params: { custom_url: string } }) {
    const supabase = createClient();
    const [loading, setLoading] = useState(true);
    const [original_link, setOriginalLink] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('shortenedlinks')
                .select('*')
                .eq('custom_url', params.custom_url);
            if (error) {
                console.error(error);
                return;
            }
            if (data && data.length > 0) {
                const original_link = data[0].original_link;
                const valid_link = getValidUrl(original_link);
                setOriginalLink(valid_link);
                window.location.href = valid_link;
            } else {
                console.error("No data found");
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ?
            (
                <>{original_link}</>
            )
            : null}
        </div>
    );
}

const getValidUrl = (url: string) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return `https://${url}`;
    }
    return url;
}
