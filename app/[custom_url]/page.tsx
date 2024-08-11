import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { custom_url: string } }) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('shortenedlinks')
        .select('original_link')
        .eq('custom_url', params.custom_url)
        .single();

    if (error) {
        console.error(error);
        return <div>An error occurred</div>;
    }

    if (data) {
        const validLink = getValidUrl(data.original_link);
        redirect(validLink);
    }

    return <div>Link not found</div>;
}

const getValidUrl = (url: string) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return `https://${url}`;
    }
    return url;
}