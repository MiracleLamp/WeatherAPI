const mongoose = require('mongoose');

const forecastSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    windSpeed: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    atmosphericPressure: { type: Number, required: true },
  },
  { timestamps: true }
);


forecastSchema.methods.calculateTemperature = function () {
  console.log('Temperature:', this.temperature);
  console.log('Atmospheric Pressure:', this.atmosphericPressure);
  console.log('Humidity:', this.humidity);

  if (
    typeof this.temperature !== 'number' ||
    typeof this.atmosphericPressure !== 'number' ||
    typeof this.humidity !== 'number'
  ) {
    return NaN;
  }

  return (this.temperature * 5 - this.atmosphericPressure / 100) * this.humidity;
};


module.exports = mongoose.model('Forecast', forecastSchema);
