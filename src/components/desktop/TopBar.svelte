<script>
    import CustomButton
        from "@src/components/desktop/topbar/CustomButton.svelte";

    let date = new Date();

    setInterval(() => {
        date = new Date();
    }, 1000);
</script>

<div class="absolute top-0 left-0 w-full h-8 m-2 flex flex-row justify-between">
    <div class="w-fit bg-pink-50 h-8 rounded-full py-1 px-2">
        <CustomButton alt="All"><i class="nf nf-fa-power_off"></i></CustomButton>
        <CustomButton alt="All"><i class="nf nf-fa-lock"></i></CustomButton>
        <div class="max-sm:hidden inline-block pl-2">
            <CustomButton alt="All"><i class="nf nf-md-numeric_1"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_2"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_3"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_4"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_5"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_6"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_7"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_8"></i></CustomButton>
            <CustomButton alt="All"><i class="nf nf-md-numeric_9"></i></CustomButton>
        </div>
    </div>
    <div class="w-fit bg-pink-50 h-full rounded-full px-2 mx-8 flex items-center justify-between select-none">
        <i class="nf nf-seti-clock mr-1 alt-2xl" /> <p class="alt-xl">{date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
    </div>
</div>