let questions = [
  {
    numb: 1,
    question: "What is the permitted diffraction angles of tripod joint?",
    immg: "img1",
    answer: "56 Degree",
    options: ["56 Degree", "26 Degree", "36 Degree", "46 Degree"]
  },
  {
    numb: 2,
    question: "What is the name of the wheel shown in the figure?",
    immg: "img2",
    answer: "Free wheel hub",
    options: ["Free wheel hub", "Transfer wheel hub", "Tyre wheel hub", "Centre wheel hub"]
  },
  {
    numb: 3,
    question: "What is the name of part marked as X in the wheel drive?",
    immg: "img3",
    answer: "Shaft housing",
    options: ["Stabilizer", "Selector rod", "Drive shaft", "Shaft housing"]
  },
  {
    numb: 4,
    question: "What is the full form of LSD?",
    immg: "img4",
    answer: "Limited Slip Differentials",
    options: [
      "Limited Slip Differentials",
      "Low Slip Differentials",
      "Limited Slip Difference",
      "Limited Slope Difference"
    ]
  },
  {
    numb: 5,
    question: "What is the name of smallest gears inside the differential casing?",
    immg: "img5",
    answer: "Star gear",
    options: ["Star gear", "Sun gear", "Side gear", "Ring gear"]
  },
  {
    numb: 6,
    question: "Which type of rear axle used on truck?",
    immg: "img6",
    answer: "Fully floating",
    options: ["Semi floating", "Fully floating", "Three quarter floating", "Quarter floating"]
  },
  {
    numb: 7,
    question: "How many live axle in six wheel drive vehicle?",
    immg: "img7",
    answer: "Three live axles",
    options: ["Three live axles", "No live axle", "One live axle", "Two live axles"]
  },
  {
    numb: 8,
    question: "Which type of gearbox having torque converter?",
    immg: "img8",
    answer: "Automatic transmission",
    options: ["Constant mesh gear box", "Synchromesh gear box", "Automatic transmission", "Sliding mesh gear box"]
  },
  {
    numb: 9,
    question: "What is function of automatic transmission?",
    immg: "img9",
    answer: "Shift the gears automatically",
    options: [
      "Shift the gears automatically",
      "Shift the gears manually",
      "Shift the gears electrically",
      "Shift the gears pneumatically"
    ]
  },
  {
    numb: 10,
    question: "What is the name of the equipment?",
    immg: "img10",
    answer: "Torque converter",
    options: ["Fuel converter", "Speed converter", "Cooling converter", "Torque converter"]
  },
  // Continue for questions 11–50...

  {
    numb: 11,
    question: "What is the name of the gear?",
    immg: "img11",
    answer: "Planetary gear",
    options: ["Sun gear", "Planetary gear", "Ring gear", "Reverse gear"]
  },
  {
    numb: 12,
    question: "What is the name of part marked as X in the automatic transmissions clutch?",
    immg: "img12",
    answer: "Drive plate",
    options: ["Drive plate", "Driven rotor", "Driven clutch", "Drive rotor"]
  },
  {
    numb: 13,
    question: "Which type of system is to isolate the vehicle body from road shock and vibration?",
    immg: "img13",
    answer: "Suspension system",
    options: ["Brake system", "Suspension system", "Hydraulic system", "Steering system"]
  },
  {
    numb: 14,
    question: "Which part of heavy vehicle deals with static and dynamic loads without deflection or distortion?",
    immg: "img14",
    answer: "Chassis and frames",
    options: ["Engine", "Power trains", "Control system", "Chassis and frames"]
  },
  {
    numb: 15,
    question: "Which way the steering system increase the tyre life?",
    immg: "img15",
    answer: "Maintaining proper angle between tyres",
    options: [
      "Maintaining proper angle between tyres",
      "Providing adequate lubrication",
      "Applying grease on the steering controls",
      "Providing proper brake adjustment"
    ]
  },
  {
    numb: 16,
    question: "What is the advantage of using power steering system?",
    immg: "img16",
    answer: "To turn and control vehicle with less effort",
    options: [
      "To increase the engine power",
      "To reduce the fuel consumption",
      "To enhance the fuel efficiency",
      "To turn and control vehicle with less effort"
    ]
  },
  {
    numb: 17,
    question: "What is the function of steering system?",
    immg: "img17",
    answer: "Guide the vehicle",
    options: [
      "Control the braking system",
      "Increase the engine RPM",
      "Guide the vehicle",
      "Control the fuel system"
    ]
  },
  {
    numb: 18,
    question: "What is the name of the angle marked as X shown in the figure?",
    immg: "img18",
    answer: "Camber angle",
    options: ["Caster angle", "King pin inclination angle", "Camber angle", "Included angle"]
  },
  {
    numb: 19,
    question: "What is the name of the part marked as X shown in the figure?",
    immg: "img19",
    answer: "Motor",
    options: ["Motor", "Assist map", "Compensator", "Observer"]
  },
  {
    numb: 20,
    question: "What is the name of the component used in the integral power steering shown in the figure?",
    immg: "img20",
    answer: "Pressure relief valve",
    options: ["Flow control valve", "Rotary valve", "Unloading valve", "Pressure relief valve"]
  },
  {
    numb: 21,
    question: "What is the name of the component in the integral power steering system shown in the figure?",
    immg: "img21",
    answer: "Flow control valve",
    options: ["Flow control valve", "Unloading valve", "Rotary valve", "Pressure release valve"]
  },
  {
    numb: 22,
    question: "What is the name of part marked as X in the integral power steering in neutral condition shown in the figure?",
    immg: "img22",
    answer: "Input shaft",
    options: ["Lower cylinder", "Upper cylinder", "Valve sleeve", "Input shaft"]
  },
  {
    numb: 23,
    question: "What is the type of power steering shown in the figure?",
    immg: "img23",
    answer: "Integral power steering",
    options: ["Integral power steering", "Linkage power steering", "Electronic power steering", "Electrical power steering"]
  },
  {
    numb: 24,
    question: "What is the type of leaf spring shown in the figure?",
    immg: "img24",
    answer: "Transverse spring",
    options: ["Quarter elliptical spring", "Transverse spring", "Semi elliptical spring", "Full elliptical spring"]
  },
  {
    numb: 25,
    question: "What is the type of leaf spring shown in the figure?",
    immg: "img25",
    answer: "Quarter elliptical spring",
    options: ["Transverse spring", "Full elliptical spring", "Quarter elliptical spring", "Semi elliptical spring"]
  },
  {
    numb: 26,
    question: "What is the type of leaf spring shown in the figure?",
    immg: "img26",
    answer: "Semi elliptical spring",
    options: ["Semi elliptical spring", "Quarter elliptical spring", "Three elliptical spring", "Transverse spring"]
  },
  {
    numb: 27,
    question: "What is the type of suspension system shown in the figure?",
    immg: "img27",
    answer: "Conventional suspension system",
    options: [
      "Independent suspension system",
      "Conventional suspension system",
      "Air suspension system",
      "Rubber spring suspension system"
    ]
  },
  {
    numb: 28,
    question: "What is the type of suspension system spring shown in the figure?",
    immg: "img28",
    answer: "Fiber composite spring",
    options: ["Mono leaf spring", "Fiber composite spring", "Multiple leaf spring", "Coil spring"]
  },
  {
    numb: 29,
    question: "What is the name of the angle marked as X shown in the figure?",
    immg: "img29",
    answer: "Thrust angle",
    options: ["Camber angle", "Cast or angle", "Thrust angle", "Included angle"]
  },
  {
    numb: 30,
    question: "What is the recommended value of combined angle in the steering system?",
    immg: "img30",
    answer: "9 - 10o",
    options: ["5 - 8o", "9 - 10o", "12 - 15o", "15 - 18o"]
  },
  {
    numb: 31,
    question: "What is the name of the angle marked as X shown in the figure?",
    immg: "img31",
    answer: "Combined angle",
    options: ["Combined angle", "Camber angle", "Castor angle", "Thrust angle"]
  },
  {
    numb: 32,
    question: "What is the steering linkage ratio if the pitman arm length twice of steering arm length?",
    immg: "img32",
    answer: "1 : 2",
    options: ["2 : 1", "1 : 1", "1 : 2", "2 : 3"]
  },
  {
    numb: 33,
    question: "What is the name of the angle marked as X shown in the figure?",
    immg: "img33",
    answer: "King pin inclination",
    options: ["Camber angle", "Castor angle", "King pin inclination", "Included angle"]
  },
  {
    numb: 34,
    question: "What is the name of angle influence the wheel alignment shown in the figure?",
    immg: "img34",
    answer: "Castor angle",
    options: ["Camber angle", "King pin Inclination angle", "Castor angle", "Included angle"]
  },
  {
    numb: 35,
    question: "What is the name of part marked as X in the suspension system shown in the figure?",
    immg: "img35",
    answer: "Rubber buffer",
    options: ["Chassis frame", "Helper spring", "Rubber buffer", "Brackets"]
  },
  {
    numb: 36,
    question: "What is the type of independent suspension system shown in the figure?",
    immg: "img36",
    answer: "Coil spring suspension",
    options: ["Torsion bar suspension", "Strut type suspension", "Air type suspension", "Coil spring suspension"]
  },
  {
    numb: 37,
    question: "What is the name of part marked as X in the coil spring suspension shown in the figure?",
    immg: "img37",
    answer: "Stabiliser bar",
    options: ["Torsion bar", "Stabiliser bar", "Control arm", "Coil spring"]
  },
  {
    numb: 38,
    question: "What is the type of suspension shown in the figure?",
    immg: "img38",
    answer: "Strut type suspension",
    options: ["Coil spring suspension", "Torsion bar suspension", "Rubber spring suspension", "Strut type suspension"]
  },
  {
    numb: 39,
    question: "Which type of stress?",
    immg: "img39",
    answer: "Shear stress",
    options: ["Tensile stress", "Compressive stress", "Shear stress", "Torsional stress"]
  },
  {
    numb: 40,
    question: "What is the unit of strain?",
    immg: "img40",
    answer: "No unit",
    options: ["Kg/cm2", "Newton/metre2", "Metre", "No unit"]
  },
  {
    numb: 41,
    question: "Which symbol is used to express change in length?",
    immg: "img41",
    answer: "δl",
    options: ["L", "δl", "I", "e"]
  },
  {
    numb: 42,
    question: "What are the various stages of heat treatment?",
    immg: "img42",
    answer: "Heating, Soaking and Quenching",
    options: [
      "Heating, Cooling and Quenching",
      "Quenching, Cooling and Heating",
      "Heating, Soaking and Quenching",
      "Soaking, Quenching and Cooling"
    ]
  },
  {
    numb: 43,
    question: "What is the other term of pocket reference in engineering works?",
    immg: "img43",
    answer: "Hand book",
    options: ["Hand tool", "Hand book", "Good book", "New book"]
  },
  {
    numb: 44,
    question: "Who prepares the cost of estimation?",
    immg: "img44",
    answer: "Estimator",
    options: ["Operator", "Quality Inspector", "Estimator", "Draughts man"]
  },
  {
    numb: 45,
    question: "What is the name of the circuit?",
    immg: "img45",
    answer: "Open circuit",
    options: ["Open circuit", "Short circuit", "Close circuit", "Parallel circuit"]
  },
  {
    numb: 46,
    question: "What is the name of the electronic symbol?",
    immg: "img46",
    answer: "Diode",
    options: ["Diode", "Switch", "Battery", "Transistor"]
  },
  {
    numb: 47,
    question: "What is the name of electrical symbol?",
    immg: "img47",
    answer: "Battery",
    options: ["Cell", "Battery", "Earth", "Resistance"]
  },
  {
    numb: 48,
    question: "What is the name of the warning sign?",
    immg: "img48",
    answer: "Risk of electric shock",
    options: ["Risk of fire", "Laser beam", "Toxic hazard", "Risk of electric shock"]
  },
  {
    numb: 49,
    question: "Which device produce the AC current in vehicle?",
    immg: "img49",
    answer: "Alternator",
    options: ["Dynamo", "Alternator", "Starting motor", "Ignition coil"]
  },
  {
    numb: 50,
    question: "What is the stationary part of a an alternator?",
    immg: "img50",
    answer: "Stator",
    options: ["Stator", "Rotar", "Slip rings", "Pulley"]
  }
];


