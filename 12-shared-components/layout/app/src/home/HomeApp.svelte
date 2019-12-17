<style>
    :root {
        --app-nav-height: 50px;
        --app-nav-height-mobile: 30px;
    }

    .app-shell {
        background: var(--app-light-color);
        min-width: var(--app-min-width);
        max-width: var(--app-max-width);
        min-height: 100vh;
        margin: auto;
        padding-top: 70px;
    }

    #tweets {
        padding: 5px;
    }

    #trending {
        padding: 5px;
    }
</style>

<Navigation authToken={authToken} on:routeChange="{onRouteChange}"/>

<section class="app-shell">
    <div id="tweets">
        {#if moduleIsLoading['tweets-app']}
            <loader-component></loader-component>
        {/if}
    </div>
    <div id="trending">
        {#if moduleIsLoading['trending-app']}
            <loader-component></loader-component>
        {/if}
    </div>
</section>

<script>
    import {registerApplication, start,} from 'single-spa';
    import 'systemjs/dist/system.min';
    import Navigation from './Navigation.svelte';
    import 'twitter-components';

    const authToken = '@Lars';
    let moduleIsLoading = {};

    registerApplication(
            'tweets-app',
            () => loadModule('tweets-app'),
            location => location.pathname === '/',
            {authToken},
    );

    registerApplication(
            'trending-app',
            () => loadModule('trending-app'),
            location => location.pathname.startsWith('/trending'),
            {authToken},
    );
    start();

    let currentRoute = '/';
    const onRouteChange = ({detail}) => currentRoute = detail;

    const loadModule = async module => {
        moduleIsLoading = {...moduleIsLoading, [module]: true};
        const loadedModule = await System.import(module).then(m => m.default);
        moduleIsLoading = {...moduleIsLoading, [module]: false};
        return loadedModule;
    };
</script>