export function MapEmbed() {
    return (
        <div className="aspect-video w-full overflow-hidden rounded-lg border">
            <iframe
                src="https://maps.google.com/maps?q=boys%20hostel%20delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hostel Location on Google Maps"
            ></iframe>
        </div>
    )
}
