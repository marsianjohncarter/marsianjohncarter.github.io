import AudioPlayer from '@/components/audio-player/audio-player';
import BookItem from '@/components/book-item/book-item';
import { merriweather } from '@/ui/lib/fonts';
import {v4 as uuidv4} from 'uuid';
const sunoSongs = [
    {
        title: "Let's run away.",
        audioUrl:
            'https://cdn1.suno.ai/3213b806-8c36-423c-ab49-f5dd8e0473c4.mp3',
        shareUrl: 'https://suno.com/song/3213b806-8c36-423c-ab49-f5dd8e0473c4',
    },
    {
        title: 'Toyota Pruis',
        audioUrl:
            'https://cdn1.suno.ai/c90e5a11-89e2-48a8-867e-fcd61e99db37.mp3',
        shareUrl: 'https://suno.com/song/c90e5a11-89e2-48a8-867e-fcd61e99db37',
    },
    {
        title: 'Laaa-Lee Loooo!',
        audioUrl:
            'https://cdn1.suno.ai/1b2de10e-7f52-486d-95dc-c4dcc3fce8fc.mp3',
        shareUrl: 'https://suno.com/song/1b2de10e-7f52-486d-95dc-c4dcc3fce8fc',
    },
];

const books = [
    {
        id: uuidv4(),
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
    },
    {
        id : uuidv4(),
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
    },
    {
        id: uuidv4(),
        title: 'I, Robot',
        author: 'Isaac Asimov',
    },
    {
        id: uuidv4(),
        title: 'The Adventures of Sherlock Holmes',
        author: 'Sir Arthur Conan Doyle',
    },
    {
        id: uuidv4(),
        title: 'The Stormlight Archive',
        author: 'Brandon Sanderson',
    },
    {
        id: uuidv4(),
        title: 'Name of the Wind',
        author: 'Patrick Rothfuss',
    },
    {
        id: uuidv4(),
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
    },
    {
        id: uuidv4(),
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
    },
    {
        id: uuidv4(),
        title: 'The Silmarillion',
        author: 'J. R. R. Tolkien',
    },
];


export default async function HobbiesSection() {
    return (
        <div
            id="hobbies"
            className="max-w-[90%] md:max-w-5xl mx-auto px-4 dark:text-white"
        >
            <div className="text-center px-4 md:px-8 py-4 my-15 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h1 className="text-5xl font-bold my-10">Hobbies</h1>
                <p className="mb-10 italic opacity-55 text-sm">
                    Things I enjoy doing in my free time to stop myself from
                    dying of boredom.
                </p>
                <div className="text-center px-4 md:px-8 py-4 my-15 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-2xl font-bold">1. Suno</h3>
                    <p className="mb-10 opacity-70 text-sm px-5 md:px-20">
                        Suno is an AI music creation software. Very fun to play
                        around with. Here are some of my favorties which I have
                        created:
                    </p>
                    {sunoSongs.map((song) => (
                        <AudioPlayer
                            key={song.title}
                            className="my-5"
                            audioUrl={song.audioUrl}
                            title={song.title}
                            shareUrl={song.shareUrl}
                        />
                    ))}
                </div>
                <div className="text-center px-4 md:px-8 py-4 my-15 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-2xl font-bold">2. Reading</h3>
                    <p className="mb-10 opacity-70 text-sm px-5 md:px-20">
                        I love reading books. Here are some of my favorites:
                    </p>
                    {books.map((book) => (
                        <BookItem
                            key={`book-${book.id}`}
                            className={`my-5 ${merriweather.className}`}
                            title={book.title}
                            author={book.author}
                            id={book.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
