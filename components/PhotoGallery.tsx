'use client'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

// Define the structure of our image objects
interface ImageItem {
    id: number
    publicId: string
    alt: string
}

// Sample image data (replace with your Cloudinary public IDs)
const images: ImageItem[] = [
    { id: 1, publicId: 'sample', alt: 'Sample Cloudinary Image' },
    { id: 2, publicId: 'sample', alt: 'Sample Cloudinary Image' },
    { id: 3, publicId: 'sample', alt: 'Sample Cloudinary Image' },
    { id: 4, publicId: 'sample', alt: 'Sample Cloudinary Image' },
    { id: 5, publicId: 'sample', alt: 'Sample Cloudinary Image' },
    { id: 6, publicId: 'sample', alt: 'Sample Cloudinary Image' },
]

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Cloudinary Photo Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                    >
                        <CldImage
                            width="300"
                            height="300"
                            src={image.publicId}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            alt={image.alt}
                            crop="fill"
                            loading="lazy"
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-3xl max-h-3xl">
                        <CldImage
                            width="600"
                            height="600"
                            src={selectedImage.publicId}
                            sizes="100vw"
                            alt={selectedImage.alt}
                            crop="fit"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}