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


        <button class="flex justify-center items-center w-fit bg-old-glory-blue p-3 px-7 rounded-xl text-white font-bold hover:bg-old-glory-blue/50" on:click={startFacialScan}>
            {#if facialSuccess}
                Facial Recognition <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            {:else}
                Start Facial Recognition 
            {/if}
        </button>
    </div>

    <button 
        class="mt-20 flex justify-center items-center w-full bg-old-glory-red p-3 rounded-xl text-white font-bold hover:bg-old-glory-red/50 {allFieldsFilled ? '' : 'bg-gray-300'}"
        disabled={allFieldsFilled}
    >
        Complete Voter Sign In
    </button>
</div>

{#if facialModal}
    <div class="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur">
        <div class="m-auto w-96 h-96 bg-white border-2 rounded-xl flex flex-col items-center justify-center">
            {#if loading}
                <div class="flex items-center gap-2">
                    <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                </div>
                <p class="mt-5 text-gray-700 font-bold">Scanning...</p>
            {/if}

            {#if !loading && successMessage}
                <p class="text-green-600 font-bold mb-5">{successMessage}</p>
                <button 
                    class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
                    on:click={closeModal}
                >
                    Close
                </button>
            {/if}
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
