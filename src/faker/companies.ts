import f from "faker";

const companies = new Array(20).fill(null).map(() => ({
  name: f.company.companyName(),
  description: f.lorem.paragraph(),
  phone: f.phone.phoneNumberFormat(),
  email: f.internet.email(),
  image: f.image.imageUrl(320, 180, undefined, true, true),
  images: [
    f.image.imageUrl(320, 180, undefined, true, true),
    f.image.imageUrl(640, 360, undefined, true, true),
    f.image.imageUrl(960, 540, undefined, true, true),
    f.image.imageUrl(1280, 720, undefined, true, true),
    f.image.imageUrl(1600, 900, undefined, true, true),
  ],
  address: {
    zipCode: f.address.zipCode(),
    city: f.address.city(),
    street: f.address.streetAddress(),
    latitude: f.address.latitude(),
    longitude: f.address.longitude(),
  },
  workingTime: {
    weekStart: f.random.number({
      min: 6,
      max: 11,
    }),
    weekEnd: f.random.number({
      min: 16,
      max: 23,
    }),
    stStart: f.random.number({
      min: 8,
      max: 11,
    }),
    stEnd: f.random.number({
      min: 12,
      max: 18,
    }),
    snStart: f.random.number({
      min: 9,
      max: 11,
    }),
    snEnd: f.random.number({
      min: 12,
      max: 15,
    }),
  },
}));

export { companies };
