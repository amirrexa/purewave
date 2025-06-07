var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { PrismaClient } from '@prisma/client';
var prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var brand1, brand2, category1, category2, category3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.brand.create({
                        data: {
                            name: 'AquaPure',
                            description: 'برند پیشرو در تولید دستگاه‌های تصفیه آب خانگی و صنعتی.',
                            logo: '/images/brands/aquapure.jpg',
                        },
                    })];
                case 1:
                    brand1 = _a.sent();
                    return [4 /*yield*/, prisma.brand.create({
                            data: {
                                name: 'PureFlow',
                                description: 'تولیدکننده فیلترهای با کیفیت برای تصفیه آب.',
                                logo: '/images/brands/pureflow.jpg',
                            },
                        })];
                case 2:
                    brand2 = _a.sent();
                    return [4 /*yield*/, prisma.category.create({
                            data: {
                                name: 'خانگی',
                                description: 'دستگاه‌های تصفیه آب برای استفاده در منازل.',
                            },
                        })];
                case 3:
                    category1 = _a.sent();
                    return [4 /*yield*/, prisma.category.create({
                            data: {
                                name: 'صنعتی',
                                description: 'دستگاه‌های تصفیه آب برای استفاده در کارخانه‌ها و کارگاه‌ها.',
                            },
                        })];
                case 4:
                    category2 = _a.sent();
                    return [4 /*yield*/, prisma.category.create({
                            data: {
                                name: 'فیلتر',
                                description: 'فیلترهای جایگزین برای دستگاه‌های تصفیه آب.',
                            },
                        })];
                case 5:
                    category3 = _a.sent();
                    // Seed Products
                    return [4 /*yield*/, prisma.product.createMany({
                            data: [
                                {
                                    name: 'دستگاه خانگی مدل A1',
                                    description: 'دستگاه تصفیه آب خانگی با فناوری نانو، مناسب برای خانواده‌ها.',
                                    price: 2500000,
                                    image: '/images/product-a1.jpg',
                                    images: ['/images/product-a1-1.jpg', '/images/product-a1-2.jpg'],
                                    brandId: brand1.id,
                                    categoryId: category1.id,
                                    stock: 50,
                                    sku: 'A1-HOME-001',
                                    weight: 5.5,
                                    dimensions: '30x20x40 cm',
                                    features: ['فیلتر نانو', 'کم مصرف', 'نصب آسان'],
                                },
                                {
                                    name: 'دستگاه صنعتی مدل B2',
                                    description: 'دستگاه تصفیه آب صنعتی برای استفاده در کارخانه‌ها و کارگاه‌ها.',
                                    price: 5000000,
                                    image: '/images/product-b2.jpg',
                                    images: ['/images/product-b2-1.jpg', '/images/product-b2-2.jpg'],
                                    brandId: brand1.id,
                                    categoryId: category2.id,
                                    stock: 20,
                                    sku: 'B2-IND-001',
                                    weight: 15.0,
                                    dimensions: '50x40x60 cm',
                                    features: ['ظرفیت بالا', 'فیلتر صنعتی', 'دوام بالا'],
                                },
                                {
                                    name: 'فیلتر جایگزین مدل C3',
                                    description: 'فیلتر جایگزین برای دستگاه‌های تصفیه آب خانگی و صنعتی.',
                                    price: 500000,
                                    image: '/images/product-c3.jpg',
                                    images: ['/images/product-c3-1.jpg', '/images/product-c3-2.jpg'],
                                    brandId: brand2.id,
                                    categoryId: category3.id,
                                    stock: 100,
                                    sku: 'C3-FIL-001',
                                    weight: 0.5,
                                    dimensions: '10x10x20 cm',
                                    features: ['فیلتر کربن فعال', 'عمر طولانی', 'مناسب برای همه مدل‌ها'],
                                },
                            ],
                        })];
                case 6:
                    // Seed Products
                    _a.sent();
                    // Seed an Admin User (optional)
                    return [4 /*yield*/, prisma.user.update({
                            where: { phoneNumber: '09123456789' }, // Replace with an existing phone number
                            data: { role: 'ADMIN' },
                        })];
                case 7:
                    // Seed an Admin User (optional)
                    _a.sent();
                    console.log('Seeding completed successfully.');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
