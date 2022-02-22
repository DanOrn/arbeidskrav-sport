<template>
    <nav class="navbar navbar-light bg-dark navbar-expand-sm mb-4">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"></router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link class="nav-link text-light" to="/">Home</router-link></li>
                     <li class="nav-item"><router-link class="nav-link text-light" to="/addSport">Add sport</router-link></li>
                     <li class="nav-item"><router-link class="nav-link text-light" to="/sportSearch">Search</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>