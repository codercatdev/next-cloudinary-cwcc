import CloudinaryImage from "./CloudinaryImage";

export default function Image() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CloudinaryImage
        width={1870}
        height={1250}
        src="ccd-cloudinary/Jamstack_Handbook_with_Colby_Fayock"
        alt="Norris"
      />
    </main>
  );
}
