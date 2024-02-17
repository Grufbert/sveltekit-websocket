<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="js">
    import { io } from 'socket.io-client'

    const socket = io()

    socket.on('eventFromServer', (message) => {
        console.log(message);
    })
</script>