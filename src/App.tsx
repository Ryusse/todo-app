import {useEffect, useState} from 'react';
import {Layout} from './elements/organisms';

const booksList = [
    {
        id: 1,
        name: 'This is a name of  the first book',
        content: 'lorem ipsum description jajaajsfak'
    },
    {
        id: 2,
        name: 'This is a name of  the first book',
        content: 'lorem ipsum description jajaajsfak'
    },
    {
        id: 3,
        name: 'This is a name of  the first book',
        content: 'lorem ipsum description jajaajsfak'
    },
    {
        id: 4,
        name: 'This is a name of  the first book',
        content: 'lorem ipsum description jajaajsfak'
    },
    {
        id: 5,
        name: 'This is a name of  the first book',
        content: 'lorem ipsum description jajaajsfak'
    },

]

function App() {
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        if (booksList.length > 0) {
            setBooks(booksList)
        }
    }, [booksList])

    return (
        <div className="App">
            <Layout>
                <h1>hOLAasdad</h1>
                <p>Este es un parrafo</p>
                <div className="bg-red-200">
                    <h2 className="text-2xl font-bold hover:underline mb-3">Este es un subtitulo</h2>
                    <p className="text-sm">Parrafo</p>
                </div>
                <ul className="pl-10 list-disc">
                    {
                        books && books.map((_, i) => (
                             <li key={i} className="">
                                <div className="flex items-center">
                                    <span className="font-medium pr-1 text-gray-700">Title:</span>
                                    <p className="text-gray-600">{_.name}</p>
                                </div>
                                <p className="text-gray-600">{_.content}</p>

                            </li>
                        ))
                    }

                </ul>
            </Layout>
        </div>
    );
}

export default App;
