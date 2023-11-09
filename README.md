# Kaboodle Tech Test

This is my submission for the Kaboodle tech test. It's a simple application that allows you to create events, which will be persisted on the server within a JSON object. You can view the list of events, and view a single event with its list of tickets. When viewing a single event you can add a ticket to the event using the form.

The client application was built with React and TypeScript, with the API being built with Node.js, Express, and TypeScript.

Both applications are running within Docker containers.

## Installation

All dependencies will be installed when running the Docker containers, so there's no need to manually install dependencies with NPM.

## Usage

Both applications can be run simultaneously with `docker compose up`. The client application should be available on localhost:3000 with the API available on localhost:5000. The client application is configured to reload the container when code is modified.
