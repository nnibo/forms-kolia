export default function Forms(){
    return(
        <>
        <div className="flex flex-row justify-evenly mt-10">
    <div className="flex flex-col gap-4 mt-6">
        <button className="relative flex justify-center items-center border-[1px] border-orange-500 rounded-md p-4 w-80 h-[55px] group">
            <p className="font-montserrat font-extrabold">Selecione seu hotel</p>
            <img className="w-[27px] ml-16" src="../../public/arrow.svg" alt="" />

            <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                <ul className="text-left border rounded">
                    <li className="px-4 py-1 hover:bg-gray-100 border-b h-10 flex items-center">Hotel 1</li>
                    <li className="px-4 py-1 hover:bg-gray-100 border-b h-10 flex items-center">Hotel 2</li>
                    <li className="px-4 py-1 hover:bg-gray-100 border-b h-10 flex items-center">Hotel 3</li>
                    <li className="px-4 py-1 hover:bg-gray-100 border-b h-10 flex items-center">Hotel 4</li> 
                </ul>
            </div>
        </button>

        <div className="flex flex-col gap-4 font-montserrat">
            <div className="mt-3">
                <h1>Nome: </h1>
                <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
            </div>

            <div className="mt-3">
                <h1>Email: </h1>
                <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
            </div>

            <div className="mt-3">
                <h1>Celular: </h1>
                <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
            </div>

            <div className="mt-3">
                <h1>Registro Geral(RG): </h1>
                <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
            </div>
        </div>
    </div>

    
    <div className="flex flex-col gap-4 font-montserrat">
        <div>
            <h1>CPF: </h1>
            <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
        </div>

        <div className="mt-3">
            <h1>Estado(UF): </h1>
            <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
        </div>

        <div className="mt-3">
            <h1>Cidade: </h1>
            <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
        </div>

        <div className="mt-3">
            <h1>Endereço: </h1>
            <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
        </div>

        <div className="mt-3">
            <h1>Número da Residência: </h1>
            <input className="border-[1px] border-orange-500 rounded-md p-3 w-80 h-[55px]" />
        </div>
    </div>

    <div className="flex flex-col ">
        <div className="border-[1px] border-orange-500 rounded-md flex flex-col items-center mt-6">
            <img className="w-36" src="../../public/img-icon.png" alt="" />
            <p className="font-montserrat">Insira uma foto do<br/> seu rosto de perto</p>
        </div>

        <div className="border-[1px] border-orange-500 rounded-md  mt-5 flex flex-col items-center ">
            <img className="w-36" src="../../public/img-icon.png" alt="" />
            <p className="font-montserrat">Insira uma foto do<br/> seu rosto de longe</p>
        </div>

        <button className="border-[1px] border-orange-500 rounded-md  hover:bg-orange-500 hover:text-white mt-[20px] h-14">
            <p className="font-montserrat">Enviar Informacoes</p>
        </button>

       
        
    </div>
</div>
        </>
    )
}