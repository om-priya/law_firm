import Image from "next/image";

export default function about() {
  return (
    <main>
      <div className="mt-6 text-center text-5xl font-semibold mb-6">
        <span className="text-[#7752FE]">About</span> Us
      </div>
      <div className="flex flex-col md:flex-row justify-evenly">
        {/* Photo */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/preamble.jpg"
            width={300}
            height={300}
            alt="Image of Preamble"
            className="p-4 max-w-lg"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="p-4 flex flex-col items-center max-w-lg">
            <h3 className="font-bold text-3xl text-[#7752FE] mb-10">
              Firm Name
            </h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              cum provident quos placeat nulla rem maiores exercitationem
              laborum quam dicta deleniti nemo nesciunt fugit accusantium
              doloremque minus porro cupiditate fuga sunt dolore illum mollitia
              a delectus numquam! Tempora ea voluptatem illum modi, ab sit
              reprehenderit, fugiat quidem, labore ipsa quos.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center items-center">
        {/* heading for greet message */}
        <h3 className="text-4xl font-semibold text-center mb-4">
          Welcome to <span className="text-[#7752FE]">Firm Name</span>
        </h3>
        {/* Minor heading */}
        <h6 className="text-center text-2xl mb-4 p-4">
          We Will Fight To Protect Your Legal Rights Under The Law
        </h6>
        {/* Message for customer */}
        <p className="text-justify max-w-lg p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sequi
          distinctio sint, nobis doloremque aspernatur corporis! Cupiditate sit
          quos nostrum eaque doloribus laudantium magni. Aspernatur illo est
          eveniet magni exercitationem tempora, ea architecto totam alias rerum
          corporis, ducimus sunt iusto nesciunt? Et voluptates eligendi
          similique excepturi quia, dolor quo odit.
        </p>
      </div>
    </main>
  );
}
