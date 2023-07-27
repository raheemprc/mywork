const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  full_name: { type: String, required: true },
  userId: { type: String, required: true },
  phone: { type: String, required: true },
  eventId: { type: String, default: null },
  eventName: { type: String, default: null },
  bookingDate: { type: String, required: true },
  appointmentDate: { type: String, default: null },
  email: { type: String },
  remainAmmount: { type: Number, default: 0 },
  paidAmmount: { type: Number, default: 0 },
  paymentStatus: { type: Boolean, default: false },
  ammount: { type: Number, default: 0 },
  eventStatus: { type: String, default: "Pending" },
  message: { type: String, default: null },
});

const EventModel = mongoose.model("EventBooking", eventSchema);

module.exports = {
  EventModel,
};
