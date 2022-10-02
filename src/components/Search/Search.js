import { useEffect, useState } from 'react'

export default function Search(props) {
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        props.onSearch(search);
    }, [search])

    return (
        <div>
            <input
                type="text"
                placeholder='Search Country'
                value={search}
                onChange={handleChange}
            />
        </div>
    )
}
