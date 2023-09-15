#!/bin/bash

# Run migrations
npx prisma generate
npx prisma db push

# Start the app
npm start
