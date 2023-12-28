import React from "react";

export default function Modal({
  showModal,
  setShowModal,
}: Readonly<{ showModal: boolean; setShowModal: Function }>) {
  const [copied, setCopied] = React.useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-stone-800 outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-lg leading-relaxed">
                    Hi! You can email me at{" "}
                    <a
                      className="text-stone-100 hover:text-lime-300 transition"
                      href="mailto:nguyenphamswork@gmail.com"
                    >
                      nguyenphamswork@gmail.com
                    </a>{" "}
                    for all work inquiries.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-lime-300 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "nguyenphamswork@gmail.com",
                      );
                      setCopied(true);
                    }}
                  >
                    {" "}
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setCopied(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
