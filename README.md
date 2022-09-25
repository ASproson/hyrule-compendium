# Hyrule Compendium

Hello there! This is a demo project demonstrating my ability to call a freely available web API and display the results in a meaningful and creative way. You can view the [live deployment here](https://asproson.github.io/hyrule-compendium/).

This repo makes use of the *Legend of Zelda: Breath of the Wild* [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/#/), which lists numerous monsters and items within the game.

## Installation

To run on your local machine please follow the below instructions:

> git clone https://github.com/ASproson/hyrule-compendium.git

> cd hyrule-compendium

> npm install

> npm start

If you want to run Jest testing suite:

> npm test

## Concept

When playing *Breath of the Wild* you eventually obtain a [Sheikah slate](https://zelda.fandom.com/wiki/Sheikah_Slate), which is a Hyrulian version of a tablet/smartphone. When using this device you can view things such as a world map or recipe catalogue, but it also contains a beastiary that details an individual monster's locations, strengths/weaknesses, and potential items they might drop when defeated. 

Following from this idea I decided to make use of the Hyrule Compendium API and turn that data into an interactive web version of the Sheikah slate. In this project I used:

- React
- Tailwind CSS
- Axios
- Jest
- React Icons
- GitHub Pages

## Next Steps

### Testing/Time Constraints

I set a time limit of 6 hours total for this project and originally wanted to explore the Cypress testing framework, but as I started to run out of time I fell back on Jest, which I'm more familiar with. The tests are far from exhaustive but I wanted to get at least *some* testing in!

### Assets

The primary asset used - the Sheikah slate - is an image I found online, made transparant using GIMP, and then upscaled to 4K to try and get a better resolution than the original 720p image. If I had more time I would have cleaned up the edges more! Additionally, I'd have also like to have made a more mobile friendly asset as the image's ratios are a little too large for smaller screen sizes, hence the uses of a standard CSS border as a replacement below medium screen sizes.

### API Limitations

The API also had some limitations in terms of primary key/foreign keys. For example, a monsters has an array of items attached to it. However, if you were to go that specific item in the API that item does not have an array of monsters attached to it. Originally I wanted to have the items within the monster description be clickable, make use of Axios GET query params, and then be taken to that specific item page. However, there would be no way 'to go back' to the monsters page from the items page as there is no relating key back to the monster. As a result, I ended up not being able to implement this feature.

### Code Repetition

There is some code reptition between components as I decided to make a desktop and then a mobile version for certain components. This is because with the amount of styling I was doing on the desktop components it quickly became very difficult to interpret how different styles were impacting each other. As a result I decided to make a split between mobile and desktop for readability. With more time I would have liked to create a more elegant solution and would have likely built more standalone components that could be called inside of page components to be styled, rather than having the styling coupled directly to the page component.

### Design

I'd have also liked to have made use of more assets and design to make it more aesthetically pleasing. I originally tried using a screenshot from the game as a backdrop, then I used a looping video, but it didn't seem to fit and led to a lot of visual clutter so I ended up removing them.


