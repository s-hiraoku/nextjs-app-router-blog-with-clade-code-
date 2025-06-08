'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';

function getSnapshot() {
  return typeof window !== 'undefined';
}

function getServerSnapshot() {
  return false;
}

export function HydrationTestBad() {
  const randomValue = Math.random();
  const currentTime = new Date().toLocaleTimeString();
  
  console.log('HydrationTestBad rendered with:', { randomValue, currentTime });
  
  return (
    <div className="p-4 border border-red-500 rounded">
      <h3 className="font-bold text-red-600">❌ Bad Pattern (Hydration Error)</h3>
      <p>Random: {randomValue}</p>
      <p>Time: {currentTime}</p>
    </div>
  );
}

export function HydrationTestGoodUseEffect() {
  const [isClient, setIsClient] = useState(false);
  const [randomValue, setRandomValue] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    setIsClient(true);
    setRandomValue(Math.random());
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);
  
  console.log('HydrationTestGoodUseEffect rendered, isClient:', isClient);
  
  if (!isClient) {
    return (
      <div className="p-4 border border-gray-500 rounded">
        <h3 className="font-bold text-gray-600">⏳ Loading...</h3>
        <p>Loading client-side content...</p>
      </div>
    );
  }
  
  return (
    <div className="p-4 border border-green-500 rounded">
      <h3 className="font-bold text-green-600">✅ Good Pattern (useEffect)</h3>
      <p>Random: {randomValue}</p>
      <p>Time: {currentTime}</p>
    </div>
  );
}

export function HydrationTestGoodSyncExternalStore() {
  const isClient = useSyncExternalStore(
    () => () => {}, 
    getSnapshot,
    getServerSnapshot
  );
  
  console.log('HydrationTestGoodSyncExternalStore rendered, isClient:', isClient);
  
  if (!isClient) {
    return (
      <div className="p-4 border border-gray-500 rounded">
        <h3 className="font-bold text-gray-600">⏳ Loading...</h3>
        <p>Loading client-side content...</p>
      </div>
    );
  }
  
  const randomValue = Math.random();
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="p-4 border border-blue-500 rounded">
      <h3 className="font-bold text-blue-600">✅ Good Pattern (useSyncExternalStore)</h3>
      <p>Random: {randomValue}</p>
      <p>Time: {currentTime}</p>
    </div>
  );
}

export function DoubleExecutionTest() {
  const [renderCount, setRenderCount] = useState(0);
  
  console.log('DoubleExecutionTest executing, count:', renderCount);
  
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, []);
  
  return (
    <div className="p-4 border border-purple-500 rounded">
      <h3 className="font-bold text-purple-600">🔄 Double Execution Test</h3>
      <p>Render count: {renderCount}</p>
      <p className="text-sm text-gray-600">
        Check console to see component execution pattern
      </p>
    </div>
  );
}