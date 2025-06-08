// app/products/page.tsx
'use client';

import MotionDiv from '@/components/ui/MotionDiv';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Row, Col, Select, Card, Divider, Button as AntdButton, Tag, Spin } from 'antd';
import { FaFilter } from 'react-icons/fa';
import { SortOption } from './sort.enum';
import Image from 'next/image';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discount?: number;
    image: string;
    features: string[];
    createdAt: Date;
    brandId: string;
    categoryId: string;
    classificationId: string; // Updated to match Classification
}

interface Category {
    id: string;
    name: string;
}

interface Brand {
    id: string;
    name: string;
}

interface Classification {
    id: string;
    name: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [classifications, setClassifications] = useState<Classification[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('0');
    const [selectedBrandId, setSelectedBrandId] = useState('0');
    const [selectedClassificationId, setSelectedClassificationId] = useState('0');
    const [sortOption, setSortOption] = useState(SortOption.Newest);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Fetch products
        fetch('/api/products')
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));

        // Fetch categories
        fetch('/api/categories')
            .then((res) => res.json())
            .then((data: Category[]) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));

        // Fetch brands
        fetch('/api/brands')
            .then((res) => res.json())
            .then((data: Brand[]) => setBrands(data))
            .catch((error) => console.error('Error fetching brands:', error));

        // Fetch classifications
        fetch('/api/classifications')
            .then((res) => res.json())
            .then((data: Classification[]) => setClassifications(data))
            .catch((error) => console.error('Error fetching classifications:', error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        let updatedProducts = [...products];
        if (selectedClassificationId !== '0') {
            updatedProducts = updatedProducts.filter(
                (product) => product.classificationId === selectedClassificationId
            );
        }
        if (selectedCategoryId !== '0') {
            updatedProducts = updatedProducts.filter(
                (product) => product.categoryId === selectedCategoryId
            );
        }
        if (selectedBrandId !== '0') {
            updatedProducts = updatedProducts.filter(
                (product) => product.brandId === selectedBrandId
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
    }, [selectedClassificationId, selectedCategoryId, selectedBrandId, sortOption, products]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spin size="large" />
            </div>
        );
    }

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
                            محصولات تصفیه آب و پمپ
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">دستگاه‌ها و پمپ‌های با کیفیت برای آب پاک و جریان</p>
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
                            <AntdButton
                                key="0"
                                onClick={() => setSelectedClassificationId('0')}
                                type={selectedClassificationId === '0' ? 'primary' : 'default'}
                            >
                                همه
                            </AntdButton>
                            {classifications.map((classification) => (
                                <AntdButton
                                    key={classification.id}
                                    onClick={() => setSelectedClassificationId(classification.id)}
                                    type={selectedClassificationId === classification.id ? 'primary' : 'default'}
                                >
                                    {classification.name}
                                </AntdButton>
                            ))}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <AntdButton
                                key="0"
                                onClick={() => setSelectedCategoryId('0')}
                                type={selectedCategoryId === '0' ? 'primary' : 'default'}
                            >
                                همه
                            </AntdButton>
                            {categories.map((category) => (
                                <AntdButton
                                    key={category.id}
                                    onClick={() => setSelectedCategoryId(category.id)}
                                    type={selectedCategoryId === category.id ? 'primary' : 'default'}
                                >
                                    {category.name}
                                </AntdButton>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <AntdButton
                                onClick={() => setSelectedBrandId('0')}
                                type={selectedBrandId === '0' ? 'primary' : 'default'}
                            >
                                همه برندها
                            </AntdButton>
                            {brands.map((brand) => (
                                <AntdButton
                                    key={brand.id}
                                    onClick={() => setSelectedBrandId(brand.id)}
                                    type={selectedBrandId === brand.id ? 'primary' : 'default'}
                                >
                                    {brand.name}
                                </AntdButton>
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
                            <div className="text-center text-gray-600 py-12 col-span-full">
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
                                                    <span className="font-medium">برند: </span>
                                                    {brands.find((b) => b.id === product.brandId)?.name || 'نامشخص'} |{' '}
                                                    <span className="font-medium">دسته‌بندی: </span>
                                                    {categories.find((c) => c.id === product.categoryId)?.name || 'نامشخص'} |{' '}
                                                    <span className="font-medium">نوع: </span>
                                                    {classifications.find((c) => c.id === product.classificationId)?.name || 'نامشخص'}
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
                            )))}
                    </Row>
                </div>
            </main>
            <Footer />
        </div>
    );
}