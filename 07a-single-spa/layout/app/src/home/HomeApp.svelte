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
    }

    #tweets {
        padding: 5px;
        flex: 2;
    }

    #trending {
        flex: 1;
    }

    .error {
        background: red;
        color: white;
        padding: .5em;
    }

    .container {
        display: flex;
    }
</style>

<section class="app-shell">
    <div id="single-spa-application:profile-app">
        {#if moduleIsLoading['profile-app']}
            <GlobalLoading/>
        {/if}
        {#if errors['profile-app']}
            <div class="error">oopsie</div>
        {/if}
    </div>
    <div class="container">
        <div id="tweets">
            {#if moduleIsLoading['tweets-app']}
                <GlobalLoading/>
            {/if}
            {#if errors['tweets-app']}
                <div class="error">oopsie</div>
            {/if}
        </div>
        <div id="trending">
            {#if moduleIsLoading['trending-app']}
                <GlobalLoading/>
            {/if}
            {#if errors['trending-app']}
                <div class="error">oopsie</div>
            {/if}
        </div>
    </div>

</section>

<script>
    import {
        addErrorHandler,
        getAppStatus,
        LOAD_ERROR,
        LOADING_SOURCE_CODE,
        NOT_MOUNTED,
        registerApplication,
        setBootstrapMaxTime,
        setMountMaxTime,
        start,
        unloadApplication,
    } from 'single-spa';
    import 'systemjs/dist/system.min';
    import GlobalLoading from "../ui/GlobalLoading.svelte";

    const authToken = '@Lars';
    let moduleIsLoading = {};
    let errors = {};

    setBootstrapMaxTime(500, true);
    setMountMaxTime(1000, true);

    registerApplication(
            'tweets-app',
            () => loadModule('tweets-app'),
            () => true,
            {authToken},
    );

    registerApplication(
            'profile-app',
            () => loadModule('profile-app'),
            () => true,
            {authToken},
    );

    registerApplication(
            'trending-app',
            () => loadModule('trending-app'),
            () => true,
            {authToken},
    );
    start();

    const loadModule = async module => {
        delete errors[module];
        moduleIsLoading = {...moduleIsLoading, [module]: true};
        const loadedModule = await System.import(module).then(m => m.default);
        moduleIsLoading = {...moduleIsLoading, [module]: false};
        return loadedModule;
    };

    addErrorHandler(err => {
        const failedApp = err.appOrParcelName;
        const appStatus = getAppStatus(failedApp);
        console.log(err);
        if (appStatus === LOAD_ERROR || appStatus === LOADING_SOURCE_CODE) {
            //in case of network error
            System.delete(System.resolve(failedApp));
            errors = {...errors, [failedApp]: true};
            moduleIsLoading = {...moduleIsLoading, [failedApp]: false};
        }
        if (appStatus === NOT_MOUNTED) {
            //in case of mount timeout
            unloadApplication(failedApp);
        }
    });
</script>