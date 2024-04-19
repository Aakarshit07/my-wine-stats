# Setting up the yarn
1. Run cmd as Administrator
run below command
```corepack enable```

2. Then initialize a new project:
```yarn init -2```

3. update Yarn
```
yarn set version stable
yarn install
```

# Installing Mantine
```yarn add @mantine/core @mantine/hooks```

1. Configure PostCSS plugin
```yarn add --dev postcss postcss-preset-mantine postcss-simple-vars``
2. create ```postcss.config.cjs``` and copy below code
3. ```
         module.exports = {
          plugins: {
            'postcss-preset-mantine': {},
            'postcss-simple-vars': {
              variables: {
                'mantine-breakpoint-xs': '36em',
                'mantine-breakpoint-sm': '48em',
                'mantine-breakpoint-md': '62em',
                'mantine-breakpoint-lg': '75em',
                'mantine-breakpoint-xl': '88em',
              },
            },
          },
       };
```

# Run Serve using below commands 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`
Builds the app for production to the `build` folder.\
Your app is ready to be deployed!

![Tables Preview](https://github.com/Aakarshit07/my-wine-stats/blob/main/src/assets/tables.png)
