<?php $__env->startSection('content'); ?>

<section class="w3-padding">

    <h2>Manage Links</h2>

    <table class="w3-table w3-stripped w3-bordered w3-margin-bottom">
        <tr class="w3-red">
            <th></th>
            <th>Name</th>
            <th>URL</th>
            <th>Created</th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <?php $__currentLoopData = $links; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $link): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td>
                    <?php if($link->icon): ?>
                        <img src="<?php echo e(asset('storage/'.$link->icon)); ?>" width="100">
                    <?php endif; ?>
                </td>
                <td><?php echo e($link->name); ?></td>
                <td>
                    <a href="<?php echo e($link->url); ?>">
                        <?php echo e($link->url); ?>

                    </a>
                </td>
                <td><?php echo e($link->created_at->format('M j, Y')); ?></td>
                <td><a href="/console/links/icon/<?php echo e($link->id); ?>">Icon</a></td>
                <td><a href="/console/links/edit/<?php echo e($link->id); ?>">Edit</a></td>
                <td><a href="/console/links/delete/<?php echo e($link->id); ?>">Delete</a></td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </table>

    <a href="/console/links/add" class="w3-button w3-green">New Link</a>

</section>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.console', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/stefanwhittakerlee/Documents/Web_Development_Work/PHP/PortfolioFinal/portfolio/resources/views/links/list.blade.php ENDPATH**/ ?>