<script lang="ts">
    let facialModal = false;
    let loading = true;
    let successMessage = '';
    let facialSuccess = false;

    let formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        registrationNumber: '',
        gidi: ''
    };

    $: allFieldsFilled = Object.values(formData).every(value => value.trim() !== '') && facialSuccess;

    const startFacialScan = () => {
        loading = true;
        successMessage = '';
        facialModal = true;

        // Simulate facial scan process
        setTimeout(() => {
            loading = false;
            successMessage = 'Facial scan complete with success!';
            facialSuccess = true;
        }, 3000);
    };

    const closeModal = () => {
        facialModal = false;
        loading = true;
        successMessage = '';
    };
</script>

<div class="max-w-xl m-auto mt-20 border-2 bg-white rounded-xl p-10">
    <div class="text-center font-bold mb-10">Voter Information</div>

    <div class="flex flex-col gap-5">
        <div class="flex justify-between gap-5">
            <label class="flex flex-col w-1/2">
                First
                <input 
                    class="bg-gray-50 border-[1px] rounded p-1" 
                    bind:value={formData.firstName}
                />
            </label>

            <label class="flex flex-col w-1/2">
                Last
                <input 
                    class="bg-gray-50 border-[1px] rounded p-1" 
                    bind:value={formData.lastName}
                />
            </label>
        </div>

        <div class="flex justify-between gap-5">
            <label class="flex flex-col w-1/2">
                Email
                <input 
                    class="bg-gray-50 border-[1px] rounded p-1" 
                    bind:value={formData.email}
                />
            </label>

            <label class="flex flex-col w-1/2">
                Phone
                <input 
                    class="bg-gray-50 border-[1px] rounded p-1" 
                    bind:value={formData.phone}
                />
            </label>
        </div>

        <label class="flex flex-col">
            Address
            <input 
                class="bg-gray-50 border-[1px] rounded p-1" 
                bind:value={formData.address}
            />
        </label>
    </div>

    <div class="text-center font-bold my-10">Voter Identification</div>

    <div class="flex flex-col gap-5">
        <label class="flex flex-col">
            Registration Number
            <input 
                class="bg-gray-50 border-[1px] rounded p-1" 
                bind:value={formData.registrationNumber}
            />
        </label>

        <label class="flex flex-col">
            Government-issued Digital Identification (GiDI)
            <input 
                class="bg-gray-50 border-[1px] rounded p-1" 
                bind:value={formData.gidi}
            />
        </label>


        <button class="flex justify-center items-center w-fit bg-old-glory-blue p-3 px-7 rounded-xl text-white font-bold hover:bg-old-glory-blue/80" on:click={startFacialScan}>
            {#if facialSuccess}
                Facial Recognition <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            {:else}
                Start Facial Recognition 
            {/if}
        </button>
    </div>

    {#if allFieldsFilled}
        <button 
            class="mt-20 flex justify-center items-center w-full bg-old-glory-red p-3 rounded-xl text-white font-bold hover:bg-old-glory-red/80 cursor-pointer"
            disabled={allFieldsFilled}
        >
            Complete Voter Sign In
        </button>
    {:else}
        <div class="text-lg text-center mt-10 text-gray-400 font-bold">Please fill every field and complete facial recognition</div>
    {/if}
</div>

{#if facialModal}
    <div class="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur">
        <div class="relative m-auto w-96 h-96 bg-white border-2 rounded-xl flex flex-col items-center justify-center">
    
            {#if !loading && successMessage}
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#16a34a"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                <p class="text-green-600 font-bold mt-5">{successMessage}</p>
                <button class="flex justify-center mt-10 items-center w-fit bg-green-600 p-3 px-7 rounded-xl text-white font-bold hover:bg-green-600/80" on:click={() => facialModal = false}>
                    Close
                </button>
            {:else}
                <div class="flex items-center gap-2">
                    <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                </div>
                <p class="mt-5 text-gray-700 font-bold">Scanning...</p>
            {/if}

            <button class="absolute top-2 right-2 rounded-full bg-gray-300 hover:bg-gray-200 p-1 w-6 h-6 flex justify-center items-center" on:click={() => facialModal = false}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
        </div>
    </div>
{/if}

<style>
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .animate-bounce {
        animation: bounce 0.6s infinite;
    }

    .delay-150 {
        animation-delay: 0.15s;
    }

    .delay-300 {
        animation-delay: 0.3s;
    }
</style>
