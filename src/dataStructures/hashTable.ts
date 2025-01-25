export class HashNode<K, V> {
    key: K;
    value: V;
    next: HashNode<K, V> | null = null;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}

interface IHashTable<K, V> {
    hash(key: K): number;
    put(key: K, value: V): void;
    get(key: K): V | null;
    remove(key: K): boolean;
    print(): void;
    getSize(): number;
}

export class HashTable<K, V> implements IHashTable<K, V>{

    private readonly buckets: Array<HashNode<K, V> | null>;  // Корзинка для наших значений
    private size: number = 0;   // HashTable size counter

    constructor(capacity: number = 10) {
        this.buckets = new Array(capacity).fill(null);  // Создаем пустой массив для бакетов размером 10 по умолчанию
    }

    // Преобразование ключа в индекс массива или хэш
    hash(key: K): number {
        const stringKey: string = key.toString();
        let hash = 0;

        for (let i: number = 0; i < stringKey.length; i++) {
            hash = (hash + stringKey.charCodeAt(i) * i) % this.buckets.length;  // Алгоритм хэш функции
        }

        return hash;
    }

    put(key: K, value: V): void {
        const index: number = this.hash(key);  // Получаем индекс бакета
        let current: HashNode<K, V> = this.buckets[index];

        // Переходим по всем существующим нодам в бакете и ищем совпадения ключа
        while (current) {
            // Если есть ключ, то обновляем значение и завершаем работу
            if (current.key === key) {
                current.value = value;
                return;
            }
            current = current.next;
        }

        // Создаем новую ноду
        const newNode = new HashNode(key, value);
        newNode.next = this.buckets[index];
        this.buckets[index] = newNode;
        this.size++;
    }

    get(key: K): V | null {
        const index: number = this.hash(key);
        let current = this.buckets[index];

        while (current) {
            if (current.key === key) {
                return current.value;
            }

            current = current.next;
        }

        return null;
    }

    remove(key: K): boolean {
        const index: number = this.hash(key);
        let current: HashNode<K, V> = this.buckets[index];
        let prev: HashNode<K, V> | null = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                }
                else {
                    this.buckets[index] = current.next;
                }
                this.size--;

                return true;
            }

            prev = current;
            current = current.next;
        }

        return false;
    }

    print(): void {
        for (const bucket of this.buckets) {
            let current = bucket;
            while (current) {
                console.log(`{ ${current.key}: ${current.value} }`);
                current = current.next;
            }
        }
    }

    getSize(): number {
        return this.size;
    }
}