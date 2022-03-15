import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const form = { node_id: 'A', name: 'B', ko: 'C', en: 'D', ja: 'E' };

            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const content = await rawResponse.json();

            console.log('content', content);
        } catch (err: any) {
            console.error(err);
        }

        setIsLoading(false);
    };

    return (
        <main>
            <h1>submit spread sheet : )</h1>
            <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center">
                    {isLoading ? (
                        <h1>loading...</h1>
                    ) : (
                        <button
                            type="submit"
                            className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600"
                        >
                            Save
                        </button>
                    )}
                </div>
            </form>
        </main>
    );
};

export default Home;
