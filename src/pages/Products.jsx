import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
function Products() {
    const [products, setProducts] = useState([]);
    const [allproduct, setallProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [filtercategory, setfilterCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('');
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setallProducts(data);
                const categoryList = ['all', ...new Set(data.map(p => p.category))]; //rest Operator - Inital Category all and if change then all data show  
                setCategory(categoryList);
                setLoading(false);
            }).catch(error => {
                console.error("Failed", error);
                setLoading(false);
            });

    }, []);
    useEffect(() => {
        let filtered = allproduct;
        // Filter by Category
        if (filtercategory !== 'all') {
            filtered = filtered.filter(p => p.category === filtercategory);
        }
        // Search by Product Name
        if (searchTerm.trim() !== '') {
            filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        //Sort the Rating and Price
        if (sortBy === 'price_asc') {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        }
        else if (sortBy === 'price_desc') {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        }
        else if (sortBy === 'rating_asc') {
            filtered = [...filtered].sort((a, b) => a.rating.rate - b.rating.rate);
        }
        else if (sortBy === 'rating_desc') {
            filtered = [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
        }
        else if (sortBy === 'default'){
            filtered = [...allproduct];
        }
        setProducts(filtered);

    }, [searchTerm, filtercategory, allproduct, sortBy]);
    const handleCategoryChange = (e) => {
        setfilterCategory(e.target.value);
    }
    const addToCart = (product) => {
        toast.success(`Product "${product.title}" has been added to your cart.`);
        console.log(`Product "${product.title}" has been added to your cart.`);
    };

    const buyNow = (product) => {
        toast.success(`Purchase successful! You bought "${product.title}".`);
        console.log(`Purchase successful! You bought "${product.title}".`);
    };

    return (

        <div className=' bg-gray-50 py-4'>

            <div className="max-w-7xl mx-auto">
                <h5 className="text-center text-2xl font-medium my-4">All Products</h5>
                <div className="flex flex-row gap-4 w-full items-center bg-white shadow-lg rounded-lg p-6 text-gray-700">
                    <div className="flex gap-4 justify-start flex-col w-full">
                        <input type="text" className="border px-2 py-1 rounded w-full" placeholder="Search by product name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <div className="flex gap-4 items-center w-3/5 justify-end">
                        <h6>Filter by Category:</h6>
                        <select value={filtercategory}
                            onChange={handleCategoryChange} className="border px-2 py-1 rounded">
                            {category.map((cat, i) => (
                                <option key={i} value={cat}>{cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                            ))}
                        </select></div>
                    <div className="flex justify-end w-3/5">
                        <div className="flex justify-between gap-4 items-center">Sort By:<select value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                            className="border px-2 py-1 rounded"> <option value="default">Default</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                            <option value="rating_asc">Rating: Low to High</option>
                            <option value="rating_desc">Rating: High to Low</option>
                        </select></div></div></div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
                    {loading ? (
                        <div className="col-span-4 text-center text-xl font-semibold mt-10">Loading...</div>
                    ) : products.length === 0 ? (
                        <div className="col-span-4 text-center text-gray-500">No products found.</div>
                    ) : (
                        products.map(product => (
                            <div key={product.id} className="border rounded-xl bg-white shadow-lg border-gray-400 py-2">
                                <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
                                <div className="p-4 text-gray-900">
                                    <div className="font-medium line-clamp-2 h-12" title={product.title}>{product.title}</div>
                                    <div className="flex justify-between my-2">
                                        <div className="font-semibold">${product.price}</div>
                                        <div className="">Rating: <span className="font-medium">{product.rating.rate}</span></div>
                                    </div>
                                    <div className="flex justify-end gap-4 mt-4">
                                        <button onClick={() => addToCart(product)} className="bg-yellow-600 rounded-md px-4 py-2 text-white cursor-pointer">Add to cart</button>
                                        <button onClick={() => buyNow(product)} className="bg-blue-600 rounded-md px-4 py-2 text-white cursor-pointer">Buy Now</button>
                                    </div>
                                </div></div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products
