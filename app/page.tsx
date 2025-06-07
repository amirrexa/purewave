import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import MotionDiv from '@/components/ui/MotionDiv';
import { FaWater, FaFilter, FaLeaf, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'موج پاک - دستگاه‌های تصفیه آب با کیفیت',
  description: 'خرید دستگاه‌های تصفیه آب با کیفیت بالا برای آب پاک و سالم در خانه و کسب‌وکار شما.',
  openGraph: {
    title: 'موج پاک',
    description: 'دستگاه‌های تصفیه آب با کیفیت برای زندگی سالم.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <div dir="rtl" className="font-vazir min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="hero relative bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: 'url(/images/banner-hero.jpg)',
            backgroundColor: '#1E88E5',
          }}
        >
          {/* Gradient Overlay with Glassmorphic Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-70 backdrop-blur-sm"></div>

          <div
            className="absolute inset-0 bg-transparent w-dvw"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2880 320'%3E%3Cpath fill='%234FC3F7' fill-opacity='0.5' d='M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,192C672,192,768,160,864,144C960,128,1056,128,1152,144C1248,160,1344,192,1392,208C1440,224,1488,224,1536,208C1584,192,1680,160,1776,160C1872,160,1968,192,2064,192C2160,192,2256,160,2352,144C2448,128,2544,128,2640,144C2736,160,2832,192,2880,208L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: '200%',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom',
            }}
          />

          <div
            className="absolute inset-0 bg-transparent w-dvw"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2880 320'%3E%3Cpath fill='%2326A69A' fill-opacity='0.4' d='M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,160C672,160,768,128,864,112C960,96,1056,96,1152,112C1248,128,1344,160,1392,176C1440,192,1488,192,1536,176C1584,160,1680,128,1776,128C1872,128,1968,160,2064,160C2160,160,2256,128,2352,112C2448,96,2544,96,2640,112C2736,128,2832,160,2880,176L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: '200%',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom',
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 px-4">
            <MotionDiv
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaWater className="text-white text-5xl animate-pulse" />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight"
            >
              <h1>آب پاک، زندگی ناب</h1>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 text-white font-light"
            >
              <p>تصفیه آب با فناوری پیشرفته برای خانه و کسب‌وکار شما</p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <MotionDiv
                className="bg-teal-500 text-white rounded-full font-semibold shadow-lg hover:bg-teal-600"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(38, 166, 154, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <Link className="flex justify-center items-center px-8 py-3" href="/products">
                  اکنون خرید کنید
                </Link>
              </MotionDiv>
              <MotionDiv
                className="border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-teal-500"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <Link className="flex justify-center items-center px-8 py-3" href="#features">
                  بیشتر بدانید
                </Link>
              </MotionDiv>
            </MotionDiv>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
                چرا موج پاک؟
              </h2>
              <p className="text-lg text-gray-600">
                ویژگی‌های برجسته دستگاه‌های تصفیه آب ما
              </p>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[var(--color-neutral)] p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaFilter className="text-4xl text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
                  فیلتراسیون پیشرفته
                </h3>
                <p className="text-gray-600">
                  حذف 99.9% از آلودگی‌ها با فناوری نانو
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[var(--color-neutral)] p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaLeaf className="text-4xl text-[var(--color-success)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
                  سازگار با محیط زیست
                </h3>
                <p className="text-gray-600">
                  کاهش مصرف پلاستیک با طراحی پایدار
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-[var(--color-neutral)] p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaWater className="text-4xl text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
                  آب خالص و گوارا
                </h3>
                <p className="text-gray-600">
                  طعم طبیعی آب با حفظ مواد معدنی ضروری
                </p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-[var(--color-neutral)]">
          <div className="container mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
                محصولات برتر ما
              </h2>
              <p className="text-lg text-gray-600">
                دستگاه‌های تصفیه آب با کیفیت برای هر نیاز
              </p>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'دستگاه خانگی مدل A1', price: '۲,۵۰۰,۰۰۰ تومان', image: '/images/product-a1.jpg' },
                { name: 'دستگاه صنعتی مدل B2', price: '۵,۰۰۰,۰۰۰ تومان', image: '/images/product-b2.jpg' },
                { name: 'فیلتر جایگزین مدل C3', price: '۵۰۰,۰۰۰ تومان', image: '/images/product-c3.jpg' },
              ].map((product, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 bg-gray-200">
                    <Image
                      width={300}
                      height={200}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg text-[var(--color-primary)] mb-4">{product.price}</p>
                    <MotionDiv
                      whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(38, 166, 154, 0.3)' }}
                      transition={{ duration: 0.3 }}
                      className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-full font-semibold text-center hover:bg-[var(--color-secondary)]"
                    >
                      <Link href="/products">مشاهده محصول</Link>
                    </MotionDiv>
                  </div>
                </MotionDiv>
              ))}
            </div>
            <div className="text-center mt-12">
              <MotionDiv
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(30, 136, 229, 0.3)' }}
                transition={{ duration: 0.3 }}
                className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-secondary)]"
              >
                <Link href="/products">مشاهده همه محصولات</Link>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
                نظرات مشتریان
              </h2>
              <p className="text-lg text-gray-600">
                تجربه کاربران از محصولات موج پاک
              </p>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'علی محمدی', quote: 'این دستگاه کیفیت آب خانه ما را متحول کرد!', rating: 5 },
                { name: 'سارا احمدی', quote: 'نصب آسان و عملکرد عالی، بسیار راضی هستم.', rating: 4 },
                { name: 'حسن رضایی', quote: 'فیلترهای باکیفیت و خدمات پس از فروش فوق‌العاده.', rating: 5 },
              ].map((testimonial, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-[var(--color-neutral)] p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className='text-yellow-400 text-xl' />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <h4 className="text-lg font-semibold text-[var(--color-dark)]">
                    {testimonial.name}
                  </h4>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center">
          <div className="container mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                آب پاک را امروز تجربه کنید!
              </h2>
              <p className="text-lg mb-8">
                با موج پاک، سلامتی و خلوص آب را به خانه خود بیاورید.
              </p>
              <MotionDiv
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
                transition={{ duration: 0.3 }}
                className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-neutral)]"
              >
                <Link href="/products">شروع کنید</Link>
              </MotionDiv>
            </MotionDiv>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}