
export default function Login() {

    async function connectToWallet() {
        ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((handleAccountsChanged) => {
                console.log('fsdfdsfsd', handleAccountsChanged);
            })
            .catch((error) => {
                if (error.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(error);
                }
            });
    };


    return (
        <div className="container flex justify-center">

            <div className="space-y-0">
                <h1 className="px-20 py-10 text-3xl">Sign in to your wallet</h1>
                <img className="px-28" src="metamasklogo.png" />

                <div className="w-1/2 flex flex-col pb-8 ml-24">

                    <button onClick={connectToWallet} className="font-bold mt-12 ml-12 bg-pink-500 hover:bg-pink-300 text-white rounded p-4 shadow-lg">
                        Login
                    </button>
                </div>
            </div>

        </div>
    )
}

