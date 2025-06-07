'use client';

import MotionDiv from '@/components/ui/MotionDiv';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Row, Col, Select, Card, Divider, Button as AntdButton, Tag } from 'antd';
import { FaFilter } from 'react-icons/fa';
import { SortOption } from './sort.enum';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discount?: number;
    image: string;
    features: string[];
    createdAt: Date;
    brand: { id: string; name: string };
    category: { id: string; name: string };
}

interface Category {
    id: string;
    name: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('0');
    const [sortOption, setSortOption] = useState(SortOption.Newest);

    useEffect(() => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => {
                const mappedProducts = data.products.map((product: Product) => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    discount: product.discount,
                    image: product.image,
                    features: product.features,
                    createdAt: new Date(product.createdAt),
                    brand: { id: product.brand.id, name: product.brand.name },
                    category: { id: product.category.id, name: product.category.name },
                }));
                const mappedCategories = data.categories.map((category: Category) => ({
                    id: category.id,
                    name: category.name,
                }));
                setProducts(mappedProducts);
                setCategories(mappedCategories);
                setFilteredProducts(mappedProducts);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        let updatedProducts = [...products];
        if (selectedCategoryId !== '0') {
            updatedProducts = updatedProducts.filter(
                (product) => product.category.id === selectedCategoryId
            );
        }
        switch (sortOption) {
            case SortOption.Cheapest:
                updatedProducts.sort((a, b) => a.price - b.price);
                break;
            case SortOption.MostExpensive:
                updatedProducts.sort((a, b) => b.price - a.price);
                break;
            case SortOption.Newest:
            default:
                updatedProducts.sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)));
                break;
        }
        setFilteredProducts(updatedProducts);
    }, [selectedCategoryId, sortOption, products]);

    return (
        <div dir="rtl" className="font-vazir min-h-screen">
            <Navbar />
            <main className="py-16">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
                            محصولات تصفیه آب
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">دستگاه‌های با کیفیت برای آب پاک و سالم</p>
                        <Divider
                            style={{
                                borderColor: 'var(--color-accent)',
                                borderWidth: 2,
                                margin: '0 auto',
                                width: '100px',
                                background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))',
                            }}
                        />
                    </MotionDiv>

                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                        <div className="flex gap-2 flex-wrap">
                            <Button
                                key="0"
                                onClick={() => setSelectedCategoryId('0')}
                                className={selectedCategoryId === '0' ? 'bg-[var(--color-accent)] text-white' : ''}
                            >
                                همه
                            </Button>
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    onClick={() => setSelectedCategoryId(category.id)}
                                    className={selectedCategoryId === category.id ? 'bg-[var(--color-accent)] text-white' : ''}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFilter className="text-[var(--color-dark)]" />
                            <Select
                                value={sortOption}
                                className="w-42"
                                style={{ color: 'var(--color-dark)' }}
                                onChange={(value: SortOption) => setSortOption(value)}
                            >
                                <Select.Option value={SortOption.Newest}>مرتب‌سازی: جدیدترین</Select.Option>
                                <Select.Option value={SortOption.Cheapest}>مرتب‌سازی: ارزان‌ترین</Select.Option>
                                <Select.Option value={SortOption.MostExpensive}>مرتب‌سازی: گران‌ترین</Select.Option>
                            </Select>
                        </div>
                    </div>

                    <Row gutter={[24, 24]}>
                        {filteredProducts.length === 0 ? (
                            <div className="text-center text-gray-600 py-12">
                                محصولی یافت نشد. لطفاً فیلترها را تغییر دهید.
                            </div>
                        ) : (
                            filteredProducts.map((product, index) => (
                                <Col xs={24} sm={12} lg={8} key={product.id}>
                                    <MotionDiv
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                    >
                                        <Card
                                            hoverable
                                            styles={{
                                                body: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    height: '200px',
                                                    padding: 0,
                                                    backgroundColor: product.discount ? 'var(--color-neutral)' : 'white',
                                                },
                                            }}
                                            cover={
                                                product.image ? (
                                                    <Image
                                                        width={400}
                                                        height={200}
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                                                        تصویر در دسترس نیست
                                                    </div>
                                                )
                                            }
                                            title={<h3 className="text-xl font-semibold text-[var(--color-dark)] p-4">{product.name}</h3>}
                                        >
                                            <div className="p-4 flex-1 overflow-hidden">
                                                <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                                                <div className="flex flex-wrap gap-1 mb-2">
                                                    {product.features.map((feature, idx) => (
                                                        <Tag key={idx} color="blue">{feature}</Tag>
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-500 mb-2">
                                                    <span className="font-medium">برند: </span>{product.brand.name} | <span className="font-medium">دسته‌بندی: </span>{product.category.name}
                                                </p>
                                                <div className="flex items-baseline gap-2">
                                                    {product.discount ? (
                                                        <>
                                                            <p className="text-lg text-[var(--color-primary)]">
                                                                {(product.price * (1 - product.discount / 100)).toLocaleString('fa-IR')} تومان
                                                            </p>
                                                            <p className="text-sm text-gray-500 line-through">
                                                                {product.price.toLocaleString('fa-IR')} تومان
                                                            </p>
                                                            <Tag color="red">{product.discount}%</Tag>
                                                        </>
                                                    ) : (
                                                        <p className="text-lg text-[var(--color-primary)]">
                                                            {product.price.toLocaleString('fa-IR')} تومان
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <Link href={`/products/${product.id}`}>
                                                    <AntdButton
                                                        type="primary"
                                                        className="w-full"
                                                        style={{
                                                            backgroundColor: 'var(--color-accent)',
                                                            borderColor: 'var(--color-accent)',
                                                            borderRadius: '9999px',
                                                        }}
                                                    >
                                                        مشاهده جزئیات
                                                    </AntdButton>
                                                </Link>
                                            </div>
                                        </Card>
                                    </MotionDiv>
                                </Col>
                            ))
                        )}
                    </Row>
                </div>
            </main>
            <Footer />
        </div>
    );
}