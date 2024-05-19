# Boston Airfare Chronicles: Interactive Insights from 2019 to 2024

## Introduction
The aviation industry faced unprecedented challenges with the onset of the COVID-19 pandemic. This project analyzes the impact of these disruptions and the subsequent recovery process at Boston Logan Airport from 2019 to 2024. It aims to provide insights into flight operations, passenger traffic, and fare structures, helping stakeholders in the aviation sector make informed decisions for future planning and sustainable growth.

## Features
- **Interactive Charts**: Visualize flight volumes, passenger numbers, and fare dynamics over time.
- **Narrative Elements**: Detailed descriptions and analyses of significant trends and events.
- **Recovery Analysis**: Examination of the recovery phase, highlighting the return to normalcy and identifying contributing factors.
- **Special Features**: 
  - Year-wise analysis buttons.
  - Animated transitions for a smooth user experience.

## Installation

### Prerequisites
- Node.js and npm installed on your machine
- Git installed on your machine

### Clone the Repository
```bash
git clone https://github.com/pranavmodh/boston-airfare-chronicles.git
cd boston-airfare-chronicles
```

### Install Dependencies
```bash
npm install
```

## Usage

### Run the Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### Build for Production
```bash
npm run build
```
This will create an optimized production build in the `build` folder.

## Project Structure
- `src/`: Contains the source code of the project
  - `components/`: Contains React components
  - `data/`: Contains data files used in the project
  - `styles/`: Contains CSS and styling files
- `public/`: Contains public assets and the main `index.html` file

## Technologies Used
- **Frontend**: React, Tailwind CSS/DaisyUI, GSAP
- **Data Visualization**: D3.js, Vega-lite
- **Version Control**: GIT
- **Build Tool**: Webpack
- **Hosting**: Deployed on a web server (provide URL if available)

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## References
- Statistical datasets from the [Boston Airport website](https://www.massport.com/logan-airport/)
- Average fare data from the [Bureau of Transportation](https://www.bts.gov/)
- CPI data from the [US government](https://www.bls.gov/cpi/)